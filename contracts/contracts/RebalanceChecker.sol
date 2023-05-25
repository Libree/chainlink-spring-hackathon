pragma solidity 0.8.17;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@chainlink/contracts/src/v0.8/AutomationCompatible.sol";
import {StrategyManager} from "./StrategyManager.sol";

contract RebalanceChecker is AutomationCompatibleInterface {
    StrategyManager strategyManager;

    constructor(address _strategyManagerAddress) {
        strategyManager = StrategyManager(_strategyManagerAddress);
    }

    function checkUpkeep(
        bytes calldata
    )
        external
        view
        override
        returns (bool upkeepNeeded, bytes memory performData)
    {
        uint totalStrategies = strategyManager._strategyIdCounter();
        uint strategyToRebalance = 0;
        bool upkeepNeeded = false;

        for (uint i = 0; i < totalStrategies; i++) {
            if (strategyManager.getRebalanceRequired(i)) {
                strategyToRebalance = i;
                upkeepNeeded = true;
                break;
            }
        }
        return (upkeepNeeded, abi.encodePacked(strategyToRebalance));
    }

    function performUpkeep(bytes calldata performData) external override {
        uint256 strategyToRebalance = abi.decode(performData, (uint));

        string memory name;
        string memory riskTolerance;
        string memory investmentGoal;
        address[] memory assets;
        uint256[] memory amounts;

        (name, riskTolerance, investmentGoal, assets, amounts) = strategyManager
            .getStrategyMetadata(strategyToRebalance);

        strategyManager.updateRebalaceRequired(strategyToRebalance, false);
    }
}
