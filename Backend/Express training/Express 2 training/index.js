import express from "express"

const app = express();
const port = 3000;

app.get("/", (request, response)=>{
    console.log(request.rawHeaders) // request option gives us the raw headers that we're getting: "where is a domain, where this website is being accessed, where is a domain, which browser is being used and etc."

    // response.send("Hello from my service!");
} )


app.get("/about", (req, res)=>{
    res.send("<h1>This is About Page</h1>")
})
app.listen(port, ()=>{
    console.log(`Port ${port} is running!`)
})