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
