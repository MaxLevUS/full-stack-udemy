import express from "express";
import path from "path";
import { fileURLToPath } from "url"; // Importing fileURLToPath
import { dirname } from "path"; // Importing dirname

const app = express();

// Use fileURLToPath to get __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Set the view engine to EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views")); // Set the views directory

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, "public")));

// Route for the home page
app.get("/", (req, res) => {
  res.render("index"); // Renders index.ejs
});

// Route for the contact page
app.get("/contact", (req, res) => {
  res.render("contact"); // Renders contact.ejs
});

// Route for the hobbies page
app.get("/hobbies", (req, res) => {
  res.render("hobbies"); // Renders hobbies.ejs
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
