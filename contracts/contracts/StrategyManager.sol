// SPDX-License-Identifier: AGPL-3.0-or-later

pragma solidity 0.8.17;

import "@openzeppelin/contracts/utils/Counters.sol";

contract StrategyManager {
    using Counters for Counters.Counter;

    struct Strategy {
        string name;
        bool rebalanceRequired;
        bool rebalanceReady;
        uint256 rebalancePeriod;
        string riskTolerance;
        string investmentGoal;
        address[] assets;
        uint256[] amounts;
        uint256 lastRebalance;
        bytes32 rebalanceId;
    }

    Counters.Counter public _strategyIdCounter;
    mapping(uint256 => Strategy) public strategies;

    function createStrategy(
        string calldata _strategyName,
        address[] calldata _assets,
        uint256[] calldata _amounts,
        uint256 _rebalancePeriod,
        string calldata _riskTolerance,
        string calldata _investmentGoal
    ) external {
        uint256 strategyId = _strategyIdCounter.current();
        _strategyIdCounter.increment();

        strategies[strategyId] = Strategy(
            _strategyName,
            true,
            false,
            _rebalancePeriod,
            _riskTolerance,
            _investmentGoal,
            _assets,
            _amounts,
            0,
            0
        );
    }

    function updateRebalaceRequired(uint256 _id, bool _value) external {
        Strategy memory strategy = strategies[_id];
        strategy.rebalanceRequired = _value;
        strategies[_id] = strategy;
    }

    function getStrategy(uint256 _id) external view returns (Strategy memory) {
        return strategies[_id];
    }

    function getRebalanceRequired(uint256 _id) external view returns (bool) {
        return strategies[_id].rebalanceRequired;
    }

    function getStrategyMetadata(
        uint256 _id
    )
        external
        view
        returns (
            string memory name,
            string memory riskTolerance,
            string memory investmentGoal,
            address[] memory assets,
            uint256[] memory amounts
        )
    {
        Strategy memory strategy = strategies[_id];
        return (
            strategy.name,
            strategy.riskTolerance,
            strategy.investmentGoal,
            strategy.assets,
            strategy.amounts
        );
    }
}
