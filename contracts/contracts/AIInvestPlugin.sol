// SPDX-License-Identifier: AGPL-3.0-or-later

pragma solidity 0.8.17;

import {PluginUUPSUpgradeable, IDAO} from "@aragon/osx/core/plugin/PluginUUPSUpgradeable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract AIInvestPlugin is PluginUUPSUpgradeable {
    using Counters for Counters.Counter;

    bytes32 public constant CREATE_STRATEGY_ID = keccak256("CREATE_STRATEGY");

    struct Stratey {
        bool rebalanceRequired;
        uint256 rebalancePeriod;
        string riskTolerance;
        string investmentGoal;
        address[] assets;
        uint256[] amounts;
    }

    Counters.Counter public _strategyIdCounter;
    mapping(uint256 => Stratey) public strategies;

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

        strategies[strategyId] = Stratey(
            true,
            _rebalancePeriod,
            _riskTolerance,
            _investmentGoal,
            _assets,
            _amounts
        );
    }
}
