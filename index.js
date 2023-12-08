import express from "express";
import bodyparser from "body-parser";

let app = express();
const port = 3000;
var list = [];


// middleware
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static("public"));

// coding logic
app.get("/", (req, res)=>{
    res.render("index.ejs");
});

app.post("/submit", (req, res)=>{
    list.push(req.body);
    res.render("index.ejs", {data:list});
    console.log(req.body);
});

// server
app.listen(port, ()=>{
    console.log(`Server is up at http://localhost:${port}`);
});