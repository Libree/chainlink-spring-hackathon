const { ethers } = require("hardhat")

async function main() {

    const STRATEGY_MANAGERS = '0x382Fa90FD0d284289757c530220C72f5E144AA60';

    const StrategyManager = await ethers.getContractFactory("StrategyManager");
    const strategyManager = StrategyManager.attach(STRATEGY_MANAGERS);

    await strategyManager.updateRebalace([
        "0",
        "yes",
        "it should rebalance",
        "100000", "20000000000", "30000000000"
    ])

}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
