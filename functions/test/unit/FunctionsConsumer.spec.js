const { assert, expect } = require("chai")
const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers")
const { network, ethers } = require("hardhat")

describe("Functions Consumer Unit Tests", async function () {
  let signers;
  let ownerAddress;
  let impersonatedSigner;
  const ROUTER_ADDRESS = '0xE592427A0AEce92De3Edee1F18E0157C05861564';
  const WBTC_ADDRESS = "0x97e8dE167322a3bCA28E8A49BC46F6Ce128FEC68"
  const USDC_ADDRESS = "0xe9DcE89B076BA6107Bb64EF30678efec11939234"
  const LINK_ADDRESS = "0x4e2f1E0dC4EAD962d3c3014e582d974b3cedF743"
  const swapManager = "0x66C62991a992Bb5FD29da0b8632eD8AEc9f942e5"

  let strategyManager


  before(async () => {
    signers = await ethers.getSigners();
    ownerAddress = await signers[0].getAddress();
    impersonatedSigner = await ethers.getImpersonatedSigner(process.env.IMPERSONATE_SIGNER || "");
    const StrategyManager = await ethers.getContractFactory("StrategyManager");
    strategyManager = await StrategyManager.deploy(swapManager);

  });

  it("create an strategy", async () => {
    await strategyManager.createStrategy(
      "Risk Parity",
      [USDC_ADDRESS, WBTC_ADDRESS, LINK_ADDRESS],
      [100000, 200000, 300000],
      12311233,
      "low",
      "get some yield"
    )

    const strategy = await strategyManager.getStrategy(0)
    expect(strategy.name).be.equals("Risk Parity")
  })


  it("Rebalance an strategy", async () => {

    const usdc = await ethers.getContractAt("ERC20", USDC_ADDRESS)
    const wbtc = await ethers.getContractAt("ERC20", WBTC_ADDRESS)
    const link = await ethers.getContractAt("ERC20", LINK_ADDRESS)

    await strategyManager.createStrategy(
      "Risk Parity",
      [USDC_ADDRESS, WBTC_ADDRESS, LINK_ADDRESS],
      [100000, 200000, 300000],
      12311233,
      "low",
      "get some yield"
    )

    await usdc.connect(impersonatedSigner).transfer(strategyManager.address, 10000000000)

    await strategyManager.rebalance(0)
  })
})
