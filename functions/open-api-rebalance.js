const strategy = args[0]
const riskTolerance = args[1]
const assets = [...args[2].split(",")]
const amountAssets = [...args[3].split(",")]
const strategyId = args[4]

const openAIRequest = Functions.makeHttpRequest({
    url: `http://127.0.0.1:5000/getRebalance`,
    method: 'POST',
    data: {
        "strategy": strategy,
        "riskTolerance": riskTolerance,
        "assets": assets,
        "amountAssets": amountAssets
    }
})

try {
    // response = await openAIRequest

    response = {
        "allocation": {
            "BTC": 200,
            "ETH": 300,
            "LINK": 2000,
            "USDC": 1000
        },
        "reasoning": "Current weights do not align with risk parity strategy",
        "rebalanceNeeded": "yes"
    }
} catch (error) {
    throw new Error(`Request failed: ${error.message}`)
}

const rebalance = response.rebalanceNeeded
const reasoning = response.reasoning
const allocation = response.allocation

return Functions.encodeString(
    `${strategyId},${response.rebalanceNeeded},${reasoning},${Object.keys(allocation).map(function (k) { return allocation[k] }).join(",")},`
)
