class PromptTemplate:
    template_strategy_recommendation = """
        With the following investment strategies {strategies},
        the list of available assets {assets},
        an investment goal of {investment_goal}, 
        an initial portfolio amount of {initial_amount},
        a risk tolerance {risk_tolerance}
        a swap cost per trade of {swap_cost}.
        Recommend which investment strategy I should choose and why. Also include the asset allocation to select, the number of assets to rebalance more efficiently, and the recommended rebalance period. 

        Return the recommendation in json format. With only one recommendation per strategy. The json output should have the following fields:
        - strategy: Strategy recommended
        - allocation: list of assets recommend with their weight expressed in decimal, should follow the format BTC: 0.3, ETH: 0.2 key symbol value weight
        - reasoning: resoning of why this is the best strategy for this case
        - rebalancePeriod: recommended rebalance period
    """

    template_strategy_rebalance = """
        Knowing that I am following a {strategy} strategy,
        with a risk tolerance {risk_tolerance},
        an the following assets {assets}, 
        that currently have the following weights {amount_assets},
        Recommend if I should rebalance, thinking of the most efficient way to do that and if worth, knowing that the cost of each swap is 0.3%
        Return the recommendation in json format. The json output should have the following fields:
        - rebalanceNeeded: yes or no
        - reasoning: why the rebalance should or should not take place max 80 characters
        - allocation: list of assets recommend with their weight expressed in decimal, should follow the format BTC: 0.3, ETH: 0.2 key symbol value weight
    """


class InvestmentData:

    strategies = [
        'Mean-Variance Optimization',
        'Equal Weighting',
        'Risk Parity',
        'Momemtum',
    ]

    swap_cost = '0.03%'
