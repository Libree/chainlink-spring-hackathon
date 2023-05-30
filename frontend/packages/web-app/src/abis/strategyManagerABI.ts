export const abi = [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "swapManager",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "strategyId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "rebalanceRequired",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "reason",
          "type": "string"
        }
      ],
      "name": "Rebalance",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "_strategyIdCounter",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "_value",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes",
          "name": "",
          "type": "bytes"
        }
      ],
      "name": "checkUpkeep",
      "outputs": [
        {
          "internalType": "bool",
          "name": "upkeepNeeded",
          "type": "bool"
        },
        {
          "internalType": "bytes",
          "name": "performData",
          "type": "bytes"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_strategyName",
          "type": "string"
        },
        {
          "internalType": "address[]",
          "name": "_assets",
          "type": "address[]"
        },
        {
          "internalType": "uint256[]",
          "name": "_amounts",
          "type": "uint256[]"
        },
        {
          "internalType": "uint256",
          "name": "_rebalancePeriod",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "_riskTolerance",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_investmentGoal",
          "type": "string"
        }
      ],
      "name": "createStrategy",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
        }
      ],
      "name": "getRebalanceRequired",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
        }
      ],
      "name": "getStrategy",
      "outputs": [
        {
          "components": [
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "bool",
              "name": "rebalanceRequired",
              "type": "bool"
            },
            {
              "internalType": "uint256",
              "name": "rebalancePeriod",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "riskTolerance",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "investmentGoal",
              "type": "string"
            },
            {
              "internalType": "address[]",
              "name": "assets",
              "type": "address[]"
            },
            {
              "internalType": "uint256[]",
              "name": "amounts",
              "type": "uint256[]"
            },
            {
              "internalType": "uint256",
              "name": "lastRebalance",
              "type": "uint256"
            }
          ],
          "internalType": "struct StrategyManager.Strategy",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
        }
      ],
      "name": "getStrategyMetadata",
      "outputs": [
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "riskTolerance",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "investmentGoal",
          "type": "string"
        },
        {
          "internalType": "address[]",
          "name": "assets",
          "type": "address[]"
        },
        {
          "internalType": "uint256[]",
          "name": "amounts",
          "type": "uint256[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes",
          "name": "performData",
          "type": "bytes"
        }
      ],
      "name": "performUpkeep",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "strategyId",
          "type": "uint256"
        }
      ],
      "name": "rebalance",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_str",
          "type": "string"
        }
      ],
      "name": "strToUint",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "res",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "err",
          "type": "bool"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "strategies",
      "outputs": [
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "bool",
          "name": "rebalanceRequired",
          "type": "bool"
        },
        {
          "internalType": "uint256",
          "name": "rebalancePeriod",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "riskTolerance",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "investmentGoal",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "lastRebalance",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "swapManagerAddress",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string[]",
          "name": "parts",
          "type": "string[]"
        }
      ],
      "name": "updateRebalace",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]