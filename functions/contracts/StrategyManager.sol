// SPDX-License-Identifier: AGPL-3.0-or-later

pragma solidity ^0.8.7;

import "@openzeppelin/contracts/utils/Counters.sol";
import "hardhat/console.sol";

contract StrategyManager {
  using Counters for Counters.Counter;

  struct Strategy {
    string name;
    bool rebalanceRequired;
    uint256 rebalancePeriod;
    string riskTolerance;
    string investmentGoal;
    address[] assets;
    uint256[] amounts;
    uint256 lastRebalance;
  }

  event Rebalance(uint256 strategyId, string rebalanceRequired, string reason);


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
      _rebalancePeriod,
      _riskTolerance,
      _investmentGoal,
      _assets,
      _amounts,
      0
    );
  }

  function updateRebalace(string[] memory parts) external {
    (uint256 strategyId, ) = strToUint(parts[0]);
    Strategy storage strategy = strategies[strategyId];
    strategy.rebalanceRequired = true;
    (uint256 btcAmount, ) = strToUint(parts[3]);
    (uint256 ethAmount, ) = strToUint(parts[4]);
    (uint256 linkAmount, ) = strToUint(parts[5]);
    (uint256 usdcAmount, ) = strToUint(parts[6]);
    strategy.amounts = [btcAmount, ethAmount, linkAmount, usdcAmount];

    strategies[strategyId] = strategy;

    emit Rebalance(strategyId, parts[1], parts[2]);
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
    return (strategy.name, strategy.riskTolerance, strategy.investmentGoal, strategy.assets, strategy.amounts);
  }

  function strToUint(string memory _str) public pure returns (uint256 res, bool err) {
    for (uint256 i = 0; i < bytes(_str).length; i++) {
      if ((uint8(bytes(_str)[i]) - 48) < 0 || (uint8(bytes(_str)[i]) - 48) > 9) {
        return (0, false);
      }
      res += (uint8(bytes(_str)[i]) - 48) * 10 ** (bytes(_str).length - i - 1);
    }

    return (res, true);
  }
}
