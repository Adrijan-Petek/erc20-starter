const hre = require("hardhat");
require("dotenv").config();
async function main() {
  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying with:", deployer.address);
  const MyToken = await hre.ethers.getContractFactory("MyToken");
  const initialSupply = hre.ethers.parseUnits("1000000", 18);
  const token = await MyToken.deploy("DemoToken", "DMT", initialSupply);
  await token.waitForDeployment();
  console.log("MyToken deployed to:", await token.getAddress());
}
main().catch(e => { console.error(e); process.exitCode = 1; });
