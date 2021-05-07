require("@nomiclabs/hardhat-waffle");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
    solidity: "0.7.3",

    defaultNetwork: 'rinkeby',
    networks: {
        localhost: {
            url: "http://127.0.0.1:7545",
        },
        hardhat: {
            allowUnlimitedContractSize: true,
            settings: {
                optimizer: {
                enabled: true,
                runs: 9999,
                },
                evmVersion: "byzantium",
            },
        },
        rinkeby: {
            url: `https://rinkeby.infura.io/v3/84dd49bae9394e01a29c868a8e569ae0`,
            accounts: ["1946677aacff15f41dd9816fffb7c17160195414fe065eb032410e627d46fac9"],
            live: true,
            saveDeployments: true,
        },
        ipfs: {
            url: `https://ipfs.infura.io/ipfs`,
        },
    }
};

