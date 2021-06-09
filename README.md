# nft

Creating a nft infrastructure for users to mint NFTs using our drag-and-drop UI and have those NFTs be listed on our marketplace.

## Resources

* [zNFT-hooks](https://www.npmjs.com/package/@levinhs/nft-hooks)
* [zdk](https://www.npmjs.com/package/@levinhs/zdk)

## Smart Contracts 

* [ERC721](https://eips.ethereum.org/EIPS/eip-721): A standard interface for non-fungible tokens, also known as deeds.
 
* [ERC1155](https://0xjac.github.io/EIPs/EIPS/eip-1155): A standard interface for contracts that manage multiple token types. A single deployed contract may include any combination of fungible tokens, non-fungible tokens, or other configurations (for example, semi-fungible tokens).

* [RFTs](https://github.com/ethereum/EIPs/issues/1634)

## Metadata Standards

'Providing asset metadata allows applications like OpenSea to pull in rich data for digital assets and easily display them in-app. Digital assets on a given smart contract are typically represented solely by a unique identifier (e.g., the token_id in ERC721), so metadata allows these assets to have additional properies, such as a name, description, and image.'

* https://docs.opensea.io/docs/metadata-standards


## Metadata structure

OpenSea supports metadata that is structured according to the official ERC721 metadata standard or the [Enjin Metadata suggestions](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1155.md#erc-1155-metadata-uri-json-schema).

## References

* https://github.com/OpenZeppelin/openzeppelin-contracts/tree/master/contracts/token/ERC721
* https://github.com/OpenZeppelin/openzeppelin-contracts/tree/master/contracts/token/ERC1155
* https://docs.openzeppelin.com/contracts/4.x/api/token/erc721
