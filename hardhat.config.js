require("dotenv").config();

require('hardhat-contract-sizer');
require("@nomiclabs/hardhat-waffle");
require(`@nomiclabs/hardhat-etherscan`);
require("solidity-coverage");
require('hardhat-gas-reporter');
require('hardhat-deploy');
require('hardhat-deploy-ethers');
require('@openzeppelin/hardhat-upgrades');
require('./tasks');

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

const DEPLOYER_PRIVATE_KEY = process.env.DEPLOYER_PRIVATE_KEY;
const mnemonic = process.env.MNEMONIC
const accounts = {
  mnemonic: "test test test test test test test test test test test junk",
  path: "m/44'/60'/0'/0",
  initialIndex: 0,
  count: 20,
  passphrase: "",
}


// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.4",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200
          }
        }
      },
      {
        version: "0.7.6",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200
          }
        }
      },
      {
        version: "0.8.12",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200
          }
        }
      }
    ]


  },

  // solidity: "0.8.4",
  contractSizer: {
    alphaSort: false,
    runOnCompile: true,
    disambiguatePaths: false,
  },

  etherscan: {
    apiKey: {
      goerli: '2W4NSRK6T3JR6WU41HHNCH5EBZJEW5DFXW',
      "base-testnet": "FGDS3IXQYACEXXARS65JUBP3E1RRHJEH3X",
      "scroll-testnet": 'KID4VZSH5FQKFTQXVQS168HND71XZCGQCB',
      mumbai: "KUG6WXTB5YCCBMSFXM9ASNRGCGBDMVNRU9",
      base: "FGDS3IXQYACEXXARS65JUBP3E1RRHJEH3X",
      scroll: "KID4VZSH5FQKFTQXVQS168HND71XZCGQCB",
    },
    customChains: [
      {
        network: "base-testnet",
        chainId: 84531,
        urls: {
         apiURL: "https://api-goerli.basescan.org/api",
         browserURL: "https://goerli.basescan.org"
        }
      },
      {
        network: "base",
        chainId: 8453,
        urls: {
         apiURL: "https://api.basescan.org/api",
         browserURL: "https://www.basescan.org"
        }
      },
      {
        network: 'scroll-testnet',
        chainId: 534351,
        urls: {
          apiURL: 'https://api-sepolia.scrollscan.dev/api',
          browserURL: 'https://sepolia.scrollscan.dev/',
        },
      },
      {
        network: "scroll",
        chainId: 534352,
        urls: {
         apiURL: "xxxx",
         browserURL: "https://blockscout.scroll.io/"
        }
      },
      {
        network: "polygon",
        chainId: 137,
        urls: {
         apiURL: "https://api.polygonscan.com/api",
         browserURL: "https://www.polygonscan.com/"
        }
      },
      {
        network: "mumbai",
        chainId: 80001,
        urls: {
         apiURL: "https://api-testnet.polygonscan.com/api",
         browserURL: "https://mumbai.polygonscan.com/"
        }
      }
    ]
  },

  namedAccounts: {
    deployer: {
      default: 0,    // wallet address 0, of the mnemonic in .env
    },
    proxyOwner: {
      default: 1,
    },
  },

  mocha: {
    timeout: 100000000
  },

  networks: {
    ethereum: {
      url: "https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161", // public infura endpoint
      chainId: 1,
      accounts: [DEPLOYER_PRIVATE_KEY],
    },
    bsc: {
      url: "https://bsc-dataseed1.binance.org",
      chainId: 56,
      accounts: [DEPLOYER_PRIVATE_KEY],
    },
    avalanche: {
      url: "https://api.avax.network/ext/bc/C/rpc",
      chainId: 43114,
      accounts: [DEPLOYER_PRIVATE_KEY],
    },
    polygon: {
      url: "https://rpc-mainnet.maticvigil.com",
      chainId: 137,
      accounts: [DEPLOYER_PRIVATE_KEY],
    },
    arbitrum: {
      url: `https://arb1.arbitrum.io/rpc`,
      chainId: 42161,
      accounts: [DEPLOYER_PRIVATE_KEY],
    },
    optimism: {
      url: `https://mainnet.optimism.io`,
      chainId: 10,
      accounts: [DEPLOYER_PRIVATE_KEY],
    },
    fantom: {
      url: `https://rpcapi.fantom.network`,
      chainId: 250,
      accounts: [DEPLOYER_PRIVATE_KEY],
    },
    metis: {
      url: `https://andromeda.metis.io/?owner=1088`,
      chainId: 1088,
      accounts: [DEPLOYER_PRIVATE_KEY],
    },
    scroll: {
      url: `https://scroll.blockpi.network/v1/rpc/public`,
      chainId: 534352,
      accounts: [DEPLOYER_PRIVATE_KEY],
    },
    base: {
      url: `https://base.llamarpc.com`,
      chainId: 8453,
      accounts: [DEPLOYER_PRIVATE_KEY],
    },

    goerli: {
      url: "https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161", // public infura endpoint
      chainId: 5,
      accounts: [DEPLOYER_PRIVATE_KEY],
    },
    'bsc-testnet': {
      url: 'https://data-seed-prebsc-1-s1.binance.org:8545/',
      chainId: 97,
      accounts: [DEPLOYER_PRIVATE_KEY],
    },
    fuji: {
      url: `https://api.avax-test.network/ext/bc/C/rpc`,
      chainId: 43113,
      accounts: [DEPLOYER_PRIVATE_KEY],
    },
    mumbai: {
      url: "https://rpc-mumbai.maticvigil.com/",
      chainId: 80001,
      accounts: [DEPLOYER_PRIVATE_KEY],
    },
    'arbitrum-goerli': {
      url: `https://goerli-rollup.arbitrum.io/rpc/`,
      chainId: 421613,
      accounts: [DEPLOYER_PRIVATE_KEY],
    },
    'optimism-goerli': {
      url: `https://goerli.optimism.io/`,
      chainId: 420,
      accounts: [DEPLOYER_PRIVATE_KEY],
    },
    'fantom-testnet': {
      url: `https://rpc.ankr.com/fantom_testnet`,
      chainId: 4002,
      accounts: [DEPLOYER_PRIVATE_KEY],
    },
    'scroll-testnet': {
      url: `https://sepolia-rpc.scroll.io`,
      chainId: 534351,
      accounts: [DEPLOYER_PRIVATE_KEY],
    },
    'base-testnet': {
      url: `https://goerli.base.org`,
      chainId: 84531,
      accounts: [DEPLOYER_PRIVATE_KEY],
    }
  }
};
