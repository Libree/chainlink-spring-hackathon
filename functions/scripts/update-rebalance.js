const { ethers } = require("hardhat")

async function main() {

    const STRATEGY_MANAGERS = '0x26866C5Cd897374E31aBbE6f8f63A3eFc814dCCA';

    const StrategyManager = await ethers.getContractFactory("StrategyManager");
    const strategyManager = StrategyManager.attach(STRATEGY_MANAGERS);

    await strategyManager.updateRebalace([
        "1",
        "yes",
        "it should rebalance",
        "100000", "20000000000", "30000000000"
    ])

}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
