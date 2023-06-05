const strategy = args[0]
const riskTolerance = args[1]
const assets = [...args[2].split(",")]
const amountAssets = [...args[3].split(",")]
const strategyId = args[4]

const openAIRequest = Functions.makeHttpRequest({
    url: `https://69ef-31-221-156-146.ngrok-free.app/getRebalance`,
    method: 'POST',
    data: {
        "strategy": strategy,
        "riskTolerance": riskTolerance,
        "assets": assets,
        "amountAssets": amountAssets
    }
})

try {
    response = await openAIRequest

} catch (error) {
    throw new Error(`Request failed: ${error.message}`)
}

const rebalance = response.rebalanceNeeded
const reasoning = response.reasoning
const allocation = response.allocation

return Functions.encodeString(
    `${strategyId},${response.rebalanceNeeded},${reasoning},${Object.keys(allocation).map(function (k) { return allocation[k] }).join(",")},`
)
