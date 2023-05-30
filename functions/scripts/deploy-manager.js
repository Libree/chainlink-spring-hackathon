const { ethers } = require("hardhat")

async function main() {

  const SWAP_MANAGER = '0x66C62991a992Bb5FD29da0b8632eD8AEc9f942e5';

  const StrategyManager = await ethers.getContractFactory("StrategyManager");
  const strategyManager = await StrategyManager.deploy(SWAP_MANAGER);

  await strategyManager.deployed();

  console.log(
    `Deployed to ${strategyManager.address}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
