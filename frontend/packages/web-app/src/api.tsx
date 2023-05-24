const BASE_URL = 'http://localhost:5000';

export const getRecommendation = async (
    initialAmount: string,
    riskTolerance: string,
    assets: string,
    investmentGoal: string
): Promise<any> => {

    const requestOptions: RequestInit = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            initialAmount,
            riskTolerance,
            assets: [assets],
            investmentGoal
        }),
    };

    try {
        const response = await fetch(`${BASE_URL}/getStrategyRecommendation`, requestOptions);
        if (!response.ok) {
            throw new Error('API request failed');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error calling API:', error);
        throw error;
    }
}