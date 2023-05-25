from langchain import PromptTemplate
import constants


def create_strategy_prompt(assets, investment_goal, initial_amount, risk_tolerance):

    prompt = PromptTemplate(
        input_variables=["strategies", "assets", "investment_goal",
                         "initial_amount", "swap_cost", "risk_tolerance"],
        template=constants.PromptTemplate.template_strategy_recommendation,
    )

    return prompt.format(
        strategies=constants.InvestmentData.strategies,
        assets=assets,
        investment_goal=investment_goal,
        initial_amount=initial_amount,
        swap_cost=constants.InvestmentData.swap_cost,
        risk_tolerance=risk_tolerance
    )



def create_rebalance_prompt(strategy, risk_tolerance, assets, amount_assets):

    prompt = PromptTemplate(
        input_variables=["strategy", "risk_tolerance", "assets",
                         "amount_assets",],
        template=constants.PromptTemplate.template_strategy_rebalance,
    )

    return prompt.format(
        strategy=strategy,
        risk_tolerance=risk_tolerance,
        assets=assets,
        amount_assets=amount_assets
    )

