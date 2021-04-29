import { HardhatUserConfig } from "hardhat/types";

import "@nomiclabs/hardhat-waffle";
import "hardhat-deploy";

const RINKEBY_PRIVATE_KEY = "8dc61541d0e0011b8768c382ff8384112b406b7e22a4fe9db4747d78d41fb9b2"

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


