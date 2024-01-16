require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });

const QUICKNODE_HTTP_URL = process.env.QUICKNODE_HTTP_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  solidity: "0.8.20",
  networks: {
    mumbai: {
      url: "https://icy-silent-wind.matic-testnet.quiknode.pro/1cb37d33599d55ba4590396ba9fab538da424717/",
      accounts: ["90254cbf1d482c0bb8f27a91b9259276c6721ed2c03d9bbdf7a763fd7589f7d2"],
    },
  },
};