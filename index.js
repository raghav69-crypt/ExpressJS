const {SSL_OP_TLS_BLOCK_RADDING_BUG } = require('constants')
// Import the express module
const express = require('express');

// Create an instance of an Express application
const app = express();

// Define the port number the server will listen on
const port = 1278  ;

// Using path module based functionalities bottom
const path = require('path') 

app.use(express.static(path.join(__dirname , "static"))) //public folder to be accessed 
app.use('/' , require(path.join(__dirname , 'routes/blog.js')))




// Start the server and make it listen on the defined port
// Log a message to the console when the server starts successfully
app.listen(port, () => {
  console.log(`Blog app listening on port ${port}`);
});
