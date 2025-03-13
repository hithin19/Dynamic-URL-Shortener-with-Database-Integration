import crypto from "crypto";
import { getAllShortLinks, getLinkByShortcode, insertShortLink } from "../services/shortener.service.js";

// GET: Render the home page with a list of shortened links
export const getshortenerpage = async (req, res) => {
  try {
    const links = await getAllShortLinks();
    // Pass the host (from request header) to the view for full URL display
    const host = req.get("host") || "localhost:3000";
    return res.render("index", { links, host });
  } catch (err) {
    console.error("Error occurred:", err);
    return res.status(500).send("Internal server error");
  }
};

// POST: Handle form submission to create a new shortened URL
export const postUrlShortener = async (req, res) => {
  try {
    const { url, shortcode } = req.body;

    // Validate that the URL is no longer than 255 characters
    if (url.length > 255) {
      return res.status(400).send("Error: The link cannot be longer than 255 characters.");
    }

    // Generate a random shortcode if none is provided
    const finalshortcode = shortcode || crypto.randomBytes(4).toString("hex");

    // Check if a link with this shortcode already exists
    const existingLink = await getLinkByShortcode(finalshortcode);
    if (existingLink) {
      return res.status(400).send("Shortcode already exists");
    }

    // Insert the new link into the database
    await insertShortLink({ url, finalshortcode });
    return res.redirect("/");
  } catch (err) {
    console.error("Error occurred:", err);
    return res.status(500).send("Internal server error");
  }
};

// GET: Redirect based on the shortcode parameter
export const redirectshortlink = async (req, res) => {
  try {
    const { shortcode } = req.params;
    const link = await getLinkByShortcode(shortcode);
    if (!link) {
      return res.redirect("/404");
    }
    return res.redirect(link.url);
  } catch (err) {
    console.error("Error occurred:", err);
    return res.status(500).send("Internal server error");
  }
};
