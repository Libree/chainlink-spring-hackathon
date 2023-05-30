import { ethers } from "hardhat";

async function main() {

  const ROUTER_ADDRESS = '0xE592427A0AEce92De3Edee1F18E0157C05861564';

  const SwapManager = await ethers.getContractFactory("SwapManager");
  const swapManager = await SwapManager.deploy(ROUTER_ADDRESS);

  await swapManager.deployed();

  console.log(
    `Deployed to ${swapManager.address}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
