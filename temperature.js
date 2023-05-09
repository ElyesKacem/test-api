const client = require("node-rest-client").Client;

// Initialize the REST client with your ThingSpeak API key
const restClient = new client();
const apiKey = "GVWQQH5H3ZMZLI8M";

// Generate a random number between 500 and 1000 every 1 second and send it to ThingSpeak
setInterval(() => {
  const value = Math.floor(Math.random() * 501) + 500;
  const url = `https://api.thingspeak.com/update?api_key=${apiKey}&field1=${value}`;
  restClient.get(url, (data, response) => {
    console.log(`Data sent to ThingSpeak: ${value}`);
  });
}, 1000); // Send data every 1 second
