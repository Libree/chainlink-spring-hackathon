// SPDX-License-Identifier: AGPL-3.0-or-later

pragma solidity 0.8.17;

import {PluginUUPSUpgradeable, IDAO} from "@aragon/osx/core/plugin/PluginUUPSUpgradeable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import {StrategyManagerBase} from "./StrategyManagerBase.sol";

contract AIInvestPlugin is PluginUUPSUpgradeable, StrategyManagerBase {
    bytes32 public constant CREATE_STRATEGY_ID = keccak256("CREATE_STRATEGY");

    bytes32 public constant UPDATE_REBALANCE_ID = keccak256("UPDATE_REBALANCE");

    constructor(address _swapManager) StrategyManagerBase(_swapManager){}

    function initialize(IDAO _dao, address _swapManager) external initializer {
        __PluginUUPSUpgradeable_init(_dao);
        StrategyManagerBase(_swapManager);
    }

    function createStrategy(
        string calldata _strategyName,
        address[] calldata _assets,
        uint256[] calldata _amounts,
        uint256 _rebalancePeriod,
        string calldata _riskTolerance,
        string calldata _investmentGoal
    ) external auth(CREATE_STRATEGY_ID) {
        _createStrategy(
            _strategyName,
            _assets,
            _amounts,
            _rebalancePeriod,
            _riskTolerance,
            _investmentGoal
        );
    }

    function updateRebalace(
        string[] memory parts
    ) external auth(UPDATE_REBALANCE_ID) {
        _updateRebalace(parts);
    }
}
