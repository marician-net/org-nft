import { HardhatUserConfig } from "hardhat/types";

import "@nomiclabs/hardhat-waffle";

const config: HardhatUserConfig = {

	solidity: {
	  compilers: [{ version: "0.5.0", settings: {} }, { version: "0.8.0", settings: {} }, { version: "0.4.21", settings: {} }, { version: "0.4.24", settings: {} },{ version: "0.4.23", settings: {} }],
	},
	networks: {
		localhost: {
			url: "http://127.0.0.1:8545/",

		},
		hardhat: {

		},
	},
};

export default config;


