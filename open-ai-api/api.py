import json
from langchain.chat_models import ChatOpenAI
from langchain.schema import (
    HumanMessage,
    SystemMessage
)

from utils import create_strategy_prompt


def get_recommendation(initial_amount, risk_tolerance, assets, investment_goal):

    prompt = create_strategy_prompt(
        assets=assets,
        investment_goal=investment_goal,
        initial_amount=initial_amount,
        risk_tolerance=risk_tolerance
    )

    chat = ChatOpenAI(temperature=0)

    messages = [
        SystemMessage(content="You are a helpful finance assistant"),
        HumanMessage(content=prompt)
    ]


    ai_message = chat(messages)

    content = ai_message.content
    initial_index = content.find('{')
    final_index = content.rfind('}')
    json_data = content[initial_index:final_index+1]

    recommentation = json.loads(json_data)

    print(recommentation)

    return recommentation
