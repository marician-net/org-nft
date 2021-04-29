import { HardhatUserConfig } from "hardhat/types";

import "@nomiclabs/hardhat-waffle";
import "hardhat-deploy";

const RINKEBY_PRIVATE_KEY = "0xc87509a1c067bbde78beb793e6fa76530b6382a4c0241e5e4a9ec0a0f44dc0d3"

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
		rinkeby: {
			url: `https://rinkeby.infura.io/v3/8b04b5a2efe54cbab00a0802cb8da8f4`,
			accounts: [RINKEBY_PRIVATE_KEY],
		},
	},
};

export default config;


