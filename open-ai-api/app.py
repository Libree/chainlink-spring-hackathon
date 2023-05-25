from api import get_recommendation, get_rebalance_recommendation
from flask import Flask, request, jsonify
from flask_cors import CORS
app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})


@app.route('/getStrategyRecommendation', methods=['POST'])
def get_strategy_recommendation():

    if request.method == 'OPTIONS':
        # Handle OPTIONS request
        response_headers = {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST',
            'Access-Control-Allow-Headers': 'Content-Type',
        }
        return '', 200, response_headers
    
    data = request.get_json()

    initial_amount = data['initialAmount']
    risk_tolerance = data['riskTolerance']
    assets = data['assets']
    investment_goal = data['investmentGoal']

    strategy_recommendation = get_recommendation(
        initial_amount=initial_amount,
        risk_tolerance=risk_tolerance,
        assets=assets,
        investment_goal=investment_goal
    )

    return jsonify(strategy_recommendation)


@app.route('/getRebalance', methods=['POST'])
def get_rebalance():
    data = request.get_json()

    strategy = data['strategy']
    risk_tolerance = data['riskTolerance']
    assets = data['assets']
    amount_assets = data['amountAssets']

    # Put your rebalance logic here

    rebalance = get_rebalance_recommendation(
        strategy=strategy,
        risk_tolerance=risk_tolerance,
        assets=assets,
        amount_assets=amount_assets
    )

    return jsonify(rebalance)


if __name__ == '__main__':
    app.run(debug=True)
