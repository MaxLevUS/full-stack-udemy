import express from "express"

const app = express();
const port = 3000;

app.get("/", (req, res)=>{
    res.send("<h1>Hello</h1>")
})
app.get("/about", (req, res)=>{
    res.send("<h1>Maksim</h1>")
})
app.get("/phone", (req, res)=>{
    res.send("<h1>612 165 4515</h1>")
})

app.listen(port, ()=>{
    console.log(`Port successfully running on port ${port}!!!`);
})