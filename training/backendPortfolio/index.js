import express from "express";
import path from "path";

const app = express();

// Set the view engine to ejs
app.set("view engine", "ejs");

// Serve static files from the "public" folder
app.use(express.static(path.join(process.cwd(), "public"))); // Use process.cwd() for the correct directory

// Route to render the index.ejs file
app.get("/", (req, res) => {
  res.render("index");
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
