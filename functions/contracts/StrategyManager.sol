// SPDX-License-Identifier: AGPL-3.0-or-later

pragma solidity ^0.8.7;

import {StrategyManagerBase} from "./StrategyManagerBase.sol";

contract StrategyManager is StrategyManagerBase {
  constructor(address _swapManager) StrategyManagerBase(_swapManager) {}

  function createStrategy(
    string calldata _strategyName,
    address[] calldata _assets,
    uint256[] calldata _amounts,
    uint256 _rebalancePeriod,
    string calldata _riskTolerance,
    string calldata _investmentGoal
  ) external {
    _createStrategy(_strategyName, _assets, _amounts, _rebalancePeriod, _riskTolerance, _investmentGoal);
  }

  function updateRebalace(string[] memory parts) external {
    _updateRebalace(parts);
  }
}
