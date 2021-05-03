# nft

Creating a nft infrastructure for users to mint NFTs using our drag-and-drop UI and have those NFTs be listed on our marketplace.

## Smart Contracts 

* [ERC721](https://eips.ethereum.org/EIPS/eip-721): A standard interface for non-fungible tokens, also known as deeds.
 
* [ERC1155](https://0xjac.github.io/EIPs/EIPS/eip-1155): A standard interface for contracts that manage multiple token types. A single deployed contract may include any combination of fungible tokens, non-fungible tokens, or other configurations (for example, semi-fungible tokens).

##  Deployment Addresses on Rinkeby Etherscan
*[ERC721](https://rinkeby.etherscan.io/address/0x9A3645715e185Db58319B5f328aAa5eE4B242a19)

*[ERC721Holder](https://rinkeby.etherscan.io/address/0xb8aaB753afb159085A5ef4f69125C582a78A8184)

*[ERC721PresetMinterPauserAutoId](https://rinkeby.etherscan.io/address/0x03BF647e28672F80aC2106843107553470f0b7a1)

## Updating the TokenURI
The user will provide a URL or a file while minting their NFT. This data is stored in the tokenURI function of the ERC721 contract (it differs slightly for ERC1155)

After some research, the [ERC721PresetMinterPauserAutoId.sol](https://github.com/zapproject/nft/blob/main/contracts/ERC721PresetMinterPauserAutoId.sol) contract allows you to set the baseTokenURI in the constructor, which should make it easy for us. 

## Metadata Standards

'Providing asset metadata allows applications like OpenSea to pull in rich data for digital assets and easily display them in-app. Digital assets on a given smart contract are typically represented solely by a unique identifier (e.g., the token_id in ERC721), so metadata allows these assets to have additional properies, such as a name, description, and image.'

* https://docs.opensea.io/docs/metadata-standards

## Serving Metadata

Example of a simple Python server metadata in this Opensea repo: https://github.com/ProjectOpenSea/opensea-creatures/tree/master/metadata-api

## Metadata structure

OpenSea supports metadata that is structured according to the official ERC721 metadata standard or the [Enjin Metadata suggestions](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1155.md#erc-1155-metadata-uri-json-schema).

## Deploying your metadata API

* [Python Example API server](https://github.com/ProjectOpenSea/metadata-api-python)

* [NodeJS Example API server](https://github.com/ProjectOpenSea/metadata-api-python)

## Listing the NFTs once created

Once minted, how will the NFTs be displayed on our marketplace?

## Metadata Storage (ARweave, IPFS Pinata)
We need a mechanism for storing the tokenURI metadata on ARWeave or IPFS. 

## Deploy Contracts with Hardhat to Ethereum
Create/modify network config in `hardhat.config.ts` and add API key and private key, then run:

`npx hardhat run --network rinkeby scripts/deploy.ts`

## References

* https://github.com/ProjectOpenSea/ethmoji-contracts
* https://github.com/ProjectOpenSea/opensea-creatures
* https://github.com/OpenZeppelin/openzeppelin-contracts/tree/master/contracts/token/ERC721
* https://github.com/OpenZeppelin/openzeppelin-contracts/tree/master/contracts/token/ERC1155
