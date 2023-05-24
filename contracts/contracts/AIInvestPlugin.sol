// SPDX-License-Identifier: AGPL-3.0-or-later

pragma solidity 0.8.17;

import {PluginUUPSUpgradeable, IDAO} from "@aragon/osx/core/plugin/PluginUUPSUpgradeable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@chainlink/contracts/src/v0.8/AutomationCompatible.sol";

contract AIInvestPlugin is
    PluginUUPSUpgradeable,
    AutomationCompatibleInterface
{
    using Counters for Counters.Counter;

    bytes32 public constant CREATE_STRATEGY_ID = keccak256("CREATE_STRATEGY");

    struct Strategy {
        bool rebalanceRequired;
        uint256 rebalancePeriod;
        string riskTolerance;
        string investmentGoal;
        address[] assets;
        uint256[] amounts;
        uint256 lastRebalance;
    }

    Counters.Counter public _strategyIdCounter;
    mapping(uint256 => Strategy) public strategies;

    function initialize(IDAO _dao) external initializer {
        __PluginUUPSUpgradeable_init(_dao);
    }

    function createStrategy(
        address[] calldata _assets,
        uint256[] calldata _amounts,
        uint256 _rebalancePeriod,
        string calldata _riskTolerance,
        string calldata _investmentGoal
    ) external auth(CREATE_STRATEGY_ID) {
        uint256 strategyId = _strategyIdCounter.current();
        _strategyIdCounter.increment();

        strategies[strategyId] = Strategy(
            true,
            _rebalancePeriod,
            _riskTolerance,
            _investmentGoal,
            _assets,
            _amounts,
            0
        );
    }

    function updateRebalance(uint256 _strategyId) external {
        Strategy storage strategy = strategies[_strategyId];
        require(
            strategy.lastRebalance + strategy.rebalancePeriod > block.timestamp,
            "NOT YET"
        );

        strategy.rebalanceRequired = true;
        strategies[_strategyId] = strategy;
    }

    function checkUpkeep(
        bytes calldata
    )
        external
        view
        override
        returns (bool upkeepNeeded, bytes memory performData)
    {
        uint totalStrategies = _strategyIdCounter.current();
        uint strategyToRebalance = 0;
        bool upkeepNeeded = false;

        for (uint i = 0; i < totalStrategies; i++) {
            Strategy memory strategy = strategies[i];
            if (strategy.rebalanceRequired) {
                strategyToRebalance = i;
                upkeepNeeded = true;
                break;
            }
        }
        return (upkeepNeeded, abi.encodePacked(strategyToRebalance));
    }

    function performUpkeep(bytes calldata performData) external override {
        //TODO: Implement swaps
    }
}
