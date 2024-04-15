import { ethers } from 'ethers';
import React, { Fragment, useEffect } from 'react'

function App() {

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

  useEffect(() => {
    const writeContract = async () => {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();

      const WalletContract = new ethers.Contract( // It is used to write on blockchain network
        CONTRACT_ADDRESS,
        CONTRACT_ABI,
        signer
      );

      await WalletContract.setValue(2354);
      
      // const provider = new ethers.providers.Web3Provider(window.ethereum);
      // It is used to create a provider object for ethers.js using the Web3Provider class. 
      // window.ethereum: This is a reference to the Ethereum provider injected by MetaMask or other Ethereum-compatible browsers.
      
      
      // await provider.send("eth_requestAccounts", []);
      // It triggers to open the metamask or any wallet
      // This line is used to request access to the user's Ethereum accounts through MetaMask or a similar Ethereum provider. [] => used to pass parameters to the metamask

      // const signer = provider.getSigner();
      // Signer is give by the web3provider like metamask (window.ethereum)
      // It is used to write on smart contract (blockchain network)
    }

    writeContract();
  }, [])

  return (
    <Fragment>
      <h1>Etherjs</h1>
    </Fragment>
  )
}

export default App