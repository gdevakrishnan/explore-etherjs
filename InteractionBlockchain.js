// Import ethers
// Install the ethers version of 
// npm install —save ethers@5.7.2
const ethers = require("ethers");
require('dotenv').config();

const { INFURA_API_KEY } = process.env;

// To get provider using the infura api by using this we can interact with the blockchain and the ipfs network
const provider = new ethers.providers.JsonRpcProvider(`https://sepolia.infura.io/v3/${INFURA_API_KEY}`);

console.log(provider);