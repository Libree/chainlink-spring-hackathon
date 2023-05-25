import { expect } from "chai";
import { ethers } from 'hardhat';
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';


describe('Strategies', function () {
    let signers: SignerWithAddress[];
    let impersonatedSigner: SignerWithAddress;
    let strategyContract: any
    const WBTC_ADDRESS = "0x97e8dE167322a3bCA28E8A49BC46F6Ce128FEC68"
    const USDC_ADDRESS = "0xe9DcE89B076BA6107Bb64EF30678efec11939234"
    const WETH_ADDRESS = "0xA6FA4fB5f76172d178d61B04b0ecd319C5d1C0aa"
    const LINK_ADDRESS = "0x4e2f1E0dC4EAD962d3c3014e582d974b3cedF743"

    before(async () => {
        signers = await ethers.getSigners();
        // impersonatedSigner = await ethers.getImpersonatedSigner(process.env.IMPERSONATE_SIGNER || "");

        const Strategies = await ethers.getContractFactory("StrategyManager");
        strategyContract = await Strategies.connect(signers[0]).deploy();
    });

    describe('Create strategy ', async () => {
        it('Creates a strategy', async () => {
            await strategyContract.createStrategy(
                "Risk Parity",
                [WBTC_ADDRESS, USDC_ADDRESS, WETH_ADDRESS, LINK_ADDRESS],
                [100, 1000, 100, 10000],
                1000,
                "low",
                "get some yield without too much volatility"
            )

            const strategy = await strategyContract.getStrategy(0)

            expect(strategy.name).to.be.equals('Risk Parity')
    
        });
    });
});