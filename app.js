const express = require('express'); 

const app = express(); 
const PORT = 3000; 

const path = require("path");
app.use("/static", express.static(path.join(__dirname, "Static Files")));
app.use(express.json());
app.post("/", (req, res) => {
    const { fname } = req.body;
    res.send(`Welcome ${fname}`);
});

// "/" - root/home
app.get("/", (req, res) => {
  res.status(200);
  res.send("Welcome to root URL of Server");
}); 
  
// http://localhost:3000/hello
// https://reqres.in/api/users?page=2
app.get("/hello", (req, res) => {
  res.set("Content-Type", "text/html");
    res.status(200).send("<h1>itni gaur se kya dekh rha ..abe gaand dega kyaa</h1>");
    // fetch data from db and send to ui
});

// http://localhost:3000/products/productId=1200 - route params
app.get("products/:productId", (req, res) => {
    res.send("Current Product Id=" + req.params.productId);
});

// http://localhost:3000/products?proId=200 - query params
app.get("/products", (req, res) => {
    res.send("Using, query params, Current Product Id= " + req.query.proId);
});

app.listen(PORT, (error) =>{ 
	if(!error) 
		console.log("Server is Successfully Running,and App is listening on port "+ PORT) 
	else
		console.log("Error occurred, server can't start", error); 
	} 
); 
