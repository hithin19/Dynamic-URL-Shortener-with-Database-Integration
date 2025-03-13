import path from "path";
import express from "express";
import 'dotenv/config'; // Loads environment variables from .env
import { shortenedroutes } from "./routes/shortener.route.js";

const app = express();

// Get __dirname for ES Modules
const __dirname = import.meta.dirname;



// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, "public")));

// Middleware to parse URL-encoded data and JSON bodies
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set EJS as the view engine
app.set("view engine", "ejs");
// If your views are in the default folder "views", no need to set app.set("views")

// Use the router for shortened routes
app.use(shortenedroutes);

// Use process.env.PORT (or default to 3000)
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
