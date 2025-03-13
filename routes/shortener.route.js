
import { Router } from "express";
import path from "path";
import { fileURLToPath } from "url";
import { postUrlShortener,getshortenerpage ,redirectshortlink} from "../controller/postsshortener.controller.js";
 // Note the .js extension

const router = Router();

// Correct way to get __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log("__dirname in shortener.route.js:", __dirname);



// Route: GET "/" - Serve the homepage with dynamic content
router.get("/",getshortenerpage );

// Route: POST "/" - Handle form submission for URL shortening using the controller
router.post("/", postUrlShortener);

// Route: GET "/:shortcode" - Redirect to the original URL for a given shortcode
router.get("/:shortcode", redirectshortlink);

// Named export of the router
export const shortenedroutes = router;
