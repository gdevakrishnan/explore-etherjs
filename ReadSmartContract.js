// After deploy our smart contract on sepolia network
// We will going to interact with the smart contract using etherjs

// Opearations
/*
    Read:
        To Read the Blockchain network we need Provider and Infura
    
    Write:
        To Write on Blockchain network we need Signer and Metamask
*/

const ethers = require("ethers");
require("dotenv").config();

const { INFURA_API_KEY, WALLET_ADDRESS } = process.env;
const provider = new ethers.providers.JsonRpcProvider(`https://sepolia.infura.io/v3/${INFURA_API_KEY}`);

// The CONTRACT_ADDRESS and CONTRACT_ABI are necessary to interact with the blockchain network
const CONTRACT_ADDRESS = "0x8eB0Cb417c257AD5b67b68eF8B4e2331c0AD272A";
const CONTRACT_ABI = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_address",
				"type": "address"
			}
		],
		"name": "accountBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "contractBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getValue",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "sendEthContract",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			}
		],
		"name": "sendEthUser",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_num",
				"type": "uint256"
			}
		],
		"name": "setValue",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];

// By using CONTRACT_ADDRESS and CONTRACT_ABI to create a instance of out smart contract to interact with the blockchain network

const ContractRead = async () => {
    const WalletContract = new ethers.Contract(
        CONTRACT_ADDRESS,
        CONTRACT_ABI,
        provider
    );

    // console.log("The instance of our contract: ");
    // console.log(WalletContract);

    // By using the above contract instance you can only able to read the blockchain network 
    
    // --------------------------------------------------------------------------
    // Uncomment the below code and run

    // const contractName = await WalletContract.name();
    // console.log("The contract name is: ", contractName);

    // --------------------------------------------------------------------------
    
    const numValue = await WalletContract.getValue();
    console.log("The value of num in Big Number: ", numValue);    // The default value of get number is BN
    console.log("The value of num in Integer: ", numValue.toString());

    // --------------------------------------------------------------------------
    
    // const contractBalance = await WalletContract.contractBalance();
    // console.log("The contract balance in Big Number: ", contractBalance);
    // console.log("The contract balance in Eth: ", ethers.utils.formatEther(contractBalance));

    // --------------------------------------------------------------------------

    // const accountBalance = await WalletContract.accountBalance(WALLET_ADDRESS);
    // console.log(`Account [${WALLET_ADDRESS}] balance in Ether: `, ethers.utils.formatEther(accountBalance));
}
ContractRead();
