// index.js
const express = require('express');
const http = require("http");
const app = require('./backend/app');
const port = 3000;

// Middleware to parse JSON requests
app.use(express.json());



// Start the server
app.listen(process.env.port || port, async() => {
  console.log(`Server is running on http://localhost:${port}`);
});
