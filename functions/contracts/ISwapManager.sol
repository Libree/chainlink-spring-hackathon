pragma solidity ^0.8.7;


interface ISwapManager {
    function swapExactInputSingle(
        uint256 amountIn,
        address tokenIn,
        address tokenOut
    ) external returns (uint256 amountOut);
}