const strategy = args[0]
const riskTolerance = args[1]
const assets = [...args[2].split(",")]
const amountAssets = [...args[3].split(",")]

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
    response = await openAIRequest
} catch (error) {
    throw new Error(`Request failed: ${error.message}`)
}

const rebalance = response.rebalanceNeeded
const reasoning = response.reasoning
const allocation = response.allocation

return Functions.encodeString(
    `${response.rebalanceNeeded},${reasoning},${Object.keys(allocation).map(function (k) { return allocation[k] }).join(",")}`
)
