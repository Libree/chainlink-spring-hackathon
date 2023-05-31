const { ethers } = require("hardhat")

async function main() {

    const STRATEGY_MANAGERS = '0x382Fa90FD0d284289757c530220C72f5E144AA60';

    const StrategyManager = await ethers.getContractFactory("StrategyManager");
    const strategyManager = StrategyManager.attach(STRATEGY_MANAGERS);

    const WBTC_ADDRESS = "0x97e8dE167322a3bCA28E8A49BC46F6Ce128FEC68"
    const USDC_ADDRESS = "0xe9DcE89B076BA6107Bb64EF30678efec11939234"
    const LINK_ADDRESS = "0x4e2f1E0dC4EAD962d3c3014e582d974b3cedF743"

    const tx = await strategyManager.createStrategy(
        "Momemtum",
        [USDC_ADDRESS, WBTC_ADDRESS, LINK_ADDRESS],
        [1000, 20000, 300000],
        12311233,
        "high",
        "Maximize return event if there is some volatility"
    )

    await tx.wait()

    const strategy = await strategyManager.getStrategy(1)

    console.log({ strategy });
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
