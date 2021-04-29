import { ethers } from "hardhat";

const hre = require("hardhat")
const fs = require('fs')

async function main() {

  let signers = await ethers.getSigners();
  
  const ERC721 = await ethers.getContractFactory('ERC721', signers[0]);
  const nft = await ERC721.deploy("AustinNFT", "AUS");
  await nft.deployed();
  console.log(`ERC721 Token address is ${nft.address}`);
  
}

main()
  .then(() =>
    process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });