const express = require("express");
const app = express();
const port = 2045;
const path = require("path");

/* Using body parser imported flows*/ 
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended : false}));

// Middleware to parse the JSON body of incoming requests
app.use(express.json());

// app.get("/" , (req,res)=>{
//     res.send("<h1> hi <h1>");
// })

// //If req is about then send html : about

// app.get("/about" , (req,res)=>{
//     res.send("<h1> about <h1>");
// })

// // Get , Post  , Put  , Delete instead of crud

app.get("/" , (req , res)=>{
    res.sendFile(path.join(__dirname + "/login6pck.html"))
})

/*Posting to endpoint using Post method*/
app.post("/api/v1/register" , (req, res)=>{
    res.send(`<h1> Done ${req.body.name}</h1>   <h2>Your Email is ${req.body.email}</h2> <h3>Your password is ${req.body.password}</h3>`);
    console.log('raghav is testing');
    console.log(req.body);
});


// app.get('/abhinav'  , (req , res)=>{
//     res.send("<h5> raghav</h5>");
//     console.log("raghav");
// });

app.get('/rj' ,(req , res)=>{
    console.log("rj is testing");
    res.send("<h2>rj Servelts</h2>")
})
/*Sending JSON to Server*/
//Getting
app.get("/api/v1/userdata" , (req,res)=>{
  res.json({
      // Send a JSON response with predefined user data
    name : "raghav" , 
    email : "raghav@gmail.com",
    password : "hexed",
  });
});
// Expected response:
// {
//   "name": "raghav",
//   "email": "raghav@gmail.com",
//   "password": "hexed"
// }

// Define a POST route for '/api/v1/register' , we will use the postman for the same passing the entities in the body : name  , email , password
app.post("/api/v1/registered", (req, res) => {
  // Extract name, email, and password from the request body
  const userName = req.body.name; // recieving name from body passing to userName
  const userEmail = req.body.email;
  const userPassword = req.body.password;

  // Send a JSON response indicating success and echoing back the received data
  res.json({
    success: true, // true indicates response is recieved
    name: userName,
    email: userEmail,
    password: userPassword, // Note: Again, it's not recommended to expose passwords in plain text
  });
});

app.listen(port, () => {
  console.log(`server is working on port : ${port}`);
}); 
