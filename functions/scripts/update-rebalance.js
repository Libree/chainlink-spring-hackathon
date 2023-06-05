const { ethers } = require("hardhat")

async function main() {

    const STRATEGY_MANAGERS = '0xbd49eAa77A1BADfC4a7e96D5Fd893ef2847821d6';

    const StrategyManager = await ethers.getContractFactory("StrategyManager");
    const strategyManager = StrategyManager.attach(STRATEGY_MANAGERS);

    await strategyManager.updateRebalace([
        "0",
        "yes",
        "Current allocation not aligned with risk parity strategy",
        "100000", "200000000", "300000000"
    ])

}

// 

//

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
