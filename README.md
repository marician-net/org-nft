# nft

Creating a nft infrastructure for users to mint NFTs using our drag-and-drop UI and have those NFTs be listed on our marketplace.

## Smart Contracts 

* ERC721: (Explanation & EIP link here)
* ERC1155: (Explanation here)

## Updating the TokenURI

The user will provide a URL or a file while minting their NFT. This data is stored in the tokenURI function of the ERC721 contract (it differs slightly for ERC1155)

## Listing the NFTs once created

Once minted, how will the NFTs be displayed on our marketplace?

## Metadata Storage (ARweave, IPFS Pinata)

We need a mechanism for storing the tokenURI metadata on ARWeave or IPFS. 

## References

* https://github.com/ProjectOpenSea/ethmoji-contracts
* https://github.com/ProjectOpenSea/opensea-creatures
* https://github.com/OpenZeppelin/openzeppelin-contracts/tree/master/contracts/token/ERC721
