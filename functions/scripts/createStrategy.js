const { ethers } = require("hardhat")

async function main() {

    const STRATEGY_MANAGERS = '0x26866C5Cd897374E31aBbE6f8f63A3eFc814dCCA';

    const StrategyManager = await ethers.getContractFactory("StrategyManager");
    const strategyManager = StrategyManager.attach(STRATEGY_MANAGERS);

    const WBTC_ADDRESS = "0x97e8dE167322a3bCA28E8A49BC46F6Ce128FEC68"
    const USDC_ADDRESS = "0xe9DcE89B076BA6107Bb64EF30678efec11939234"
    const LINK_ADDRESS = "0x4e2f1E0dC4EAD962d3c3014e582d974b3cedF743"

    const tx = await strategyManager.createStrategy(
        "Risk Parity",
        [USDC_ADDRESS, WBTC_ADDRESS, LINK_ADDRESS],
        [10, 20, 30],
        12311233,
        "low",
        "get some yield"
    )

    await tx.wait()

    const strategy = await strategyManager.getStrategy(1)

    console.log({ strategy });
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
