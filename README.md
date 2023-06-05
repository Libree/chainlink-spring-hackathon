# Libree AI investment plugin
This repository contains our project for the Chainlink Spring 2023 Hackathon 

## Introduction
The objective of this project is to develop a plugin for Aragon DAOs. This plugin enables DAOs to employ an AI agent that automatically proposes and rebalances treasury strategies. It can be installed in any DAO utilizing the Aragon framework, allowing members to propose and establish an automatic treasury rebalancing strategy.

After installing the plugin in the DAO, a member can input the necessary parameters to assess the risk profile of the strategy. By utilizing the Open AI chatGPT API, a recommended strategy will be generated. If the user approves of the suggested strategy, it will be submitted as a proposal to the DAO. Once the proposal is approved, the treasury will be automatically rebalanced.

To trigger the rebalancing process and determine the most efficient weights for rebalancing, Chainlink automations and functions are utilized in conjunction with the recommendations provided by the AI.

## Architecture
To make this plugin possible and communicate with an external API to get the rebalances recommendations we have created the following Architecture

![Architecture](/docs/diagram.PNG)

The main components of this project are as follows:
- Aragon plugin: This plugin is designed for the Aragon OSx platform and enables the extension of functionality and contracts within DAOs. By utilizing this plugin, DAOs can establish strategies in their smart contracts and expose public functions that allow for treasury rebalancing when specific conditions are met.
- Chainlink Automation: A job within Chainlink automations is responsible for monitoring the conditions set for rebalancing, such as the strategy and rebalance period. When it detects that a rebalance is required, it triggers the rebalance function, which in turn calls the necessary Chainlink functions.
- Chainlink functions: These functions receive requests from the DAO contracts along with the parameters set for risk tolerance. Based on the current distribution of the treasury and the cost associated with rebalancing, these functions propose rebalance weights. The proposed weights are then sent back to the contract and executed using the Chainlink automation.

In summary, the Aragon plugin allows DAOs to set rebalancing strategies and expose functions for treasury rebalancing. Chainlink automations monitor the conditions for rebalancing and trigger the rebalance function, which interacts with Chainlink functions to propose and execute rebalance weights based on the specified parameters.

## Components

This repository has four components:
- [Contracts](https://github.com/Libree/chainlink-spring-hackathon/tree/main/contracts): Implements the aragon plugin to be used in DAOs using solidity v0.8
- [Contracts-v7](https://github.com/Libree/chainlink-spring-hackathon/tree/main/contracts-v7): Implements a swap manager in solidity v0.7 to execute the swaps on rebalance, then an interface of this manager is imported in the strategy Manager, that is using solidity v0.8
- [Frontend](https://github.com/ialberquilla/chainlink-technical-indicators/tree/main/frontend): an Aragon UI fork to implement all the new pages need to use this plugin
- [Functions](https://github.com/ialberquilla/chainlink-technical-indicators/tree/main/frontend): Implements chainlink functions api call, in order to receive calls from smart contracts with the current status of the strategy and call and external api to get the recommended values that will be send back to the contract.
- [OpenAI API](https://github.com/ialberquilla/chainlink-technical-indicators/tree/main/frontend): An API to interact with chatGPT open AI model, receives the parameters send by the user, and leveragin langchain api, sends the data needed for the model to estimate the most efficient rebalance for the treasury if needed.


## Contracts Addresses (Polygon Mumbai):
- [Strategy Manager: 0xbd49eAa77A1BADfC4a7e96D5Fd893ef2847821d6](https://mumbai.polygonscan.com/address/0xbd49eAa77A1BADfC4a7e96D5Fd893ef2847821d6)
- [Swap Manager: 0x66C62991a992Bb5FD29da0b8632eD8AEc9f942e5](https://mumbai.polygonscan.com/address/0x66C62991a992Bb5FD29da0b8632eD8AEc9f942e5)
- [Functions Consumer: ](https://mumbai.polygonscan.com/address/)
