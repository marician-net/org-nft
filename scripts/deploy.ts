import { ethers } from "hardhat";

const hre = require("hardhat")
const fs = require('fs')

async function main() {

  let signers = await ethers.getSigners();
  
  // ERC721
  const ERC721 = await ethers.getContractFactory('ERC721', signers[0]);
  const nft1 = await ERC721.deploy("AustinNFT", "AUS");
  await nft1.deployed();
  console.log(`ERC721 Token address is ${nft1.address}`);

  // ERC721Holder
  const ERC721Holder = await ethers.getContractFactory("ERC721Holder", signers[0]);
  const nft2 = await ERC721Holder.deploy();
  await nft2.deployed();
  console.log(`ERC721Holder Token address is ${nft2.address}`)

  // ERC721PresetMinterPauserAutoId
  const ERC721PresetMinterPauserAutoId = await ethers.getContractFactory("ERC721PresetMinterPauserAutoId", signers[0])
  const nft3 = await ERC721PresetMinterPauserAutoId.deploy("AustinNFT", "AUS", "http://somenftlink.com");
  await nft3.deployed();
  console.log(`ERC721PresetMinterPauserAutoId Token address is ${nft3.address}`);
  
}

main()
  .then(() =>
    process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });