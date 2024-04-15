// Import ethers
// Install the ethers version of 
// npm install —save ethers@5.7.2
const ethers = require("ethers");
require('dotenv').config();

const { INFURA_API_KEY, WALLET_ADDRESS } = process.env;

// #############################################################################

// To get provider using the infura api by using this we can interact with the blockchain and the ipfs network
// JavaScript Object Notation (JSON) Remote Procedure Call (RPC)
const provider = new ethers.providers.JsonRpcProvider(`https://sepolia.infura.io/v3/${INFURA_API_KEY}`);
console.log("provider: ");
console.log(provider);

// To get the blocknumber using the provider
const queryBlockchain = async () => {
    const blockNumber = await provider.getBlockNumber();
    console.log(`\nThe Current Block Number is: ${blockNumber}`);
}
queryBlockchain();

// #############################################################################

// To get Balance of an Wallet Address and Log in the formats of Big Number, Eth (Ether), Wei
const accountBalance = async () => {
    // Balanc in Big Number
    const BalanceBigNumber = await provider.getBalance(WALLET_ADDRESS);
    console.log(`\nAccount (${WALLET_ADDRESS}) Balace: \n1. Account Balance in Big Number: `, BalanceBigNumber.toString());

    // Balance in Ether (eth)
    const BalanceEth = ethers.utils.formatEther(BalanceBigNumber);
    console.log("2. Account Balance in Ether(eth): ", BalanceEth);
    
    // Balance in Wei
    const BalanceWei = ethers.utils.parseEther(BalanceEth);
    console.log("3. Account Balance in Wei: ", BalanceWei.toString());
}
accountBalance();