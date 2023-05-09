const express = require("express");
const app = express();

app.get("/random", (req, res) => {
  const randomNumber = Math.floor(Math.random() * (1000 - 500 + 1) + 500); // Generate random number between 500 and 1000
  res.send({ temperature: randomNumber }); // Return the number in JSON format
});

setInterval(() => {
  const randomNumber = Math.floor(Math.random() * (1000 - 500 + 1) + 500); // Generate random number between 500 and 1000
  // console.log(`Random number: ${randomNumber}`); // Log the number to the console
}, 1000); // Generate a new number every 1 second

app.listen(3000, () => console.log("Server started on port 3000")); // Start the server on port 3000
