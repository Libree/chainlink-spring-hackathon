import { expect } from "chai";
import { ethers } from 'hardhat';
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';


describe('Swap manager', function () {
    let signers: SignerWithAddress[];
    let ownerAddress: string;
    let impersonatedSigner: SignerWithAddress;
    const ROUTER_ADDRESS: string = '0xE592427A0AEce92De3Edee1F18E0157C05861564';
    const WBTC_ADDRESS = "0x97e8dE167322a3bCA28E8A49BC46F6Ce128FEC68"
    const USDC_ADDRESS = "0xe9DcE89B076BA6107Bb64EF30678efec11939234"
    let swapManager: any


    before(async () => {
        signers = await ethers.getSigners();
        ownerAddress = await signers[0].getAddress();
        impersonatedSigner = await ethers.getImpersonatedSigner(process.env.IMPERSONATE_SIGNER || "");
        const SwapManager = await ethers.getContractFactory("SwapManager");
        swapManager = await SwapManager.deploy(ROUTER_ADDRESS);

    });


    describe('Swap: ', async () => {
        it('Swaps USDC into tokens', async () => {
            const usdc = await ethers.getContractAt("IERC20", USDC_ADDRESS)
            const wbtc = await ethers.getContractAt("IERC20", WBTC_ADDRESS)
            const balanceBefore = await wbtc.balanceOf(impersonatedSigner.address)
            await usdc.connect(impersonatedSigner).approve(swapManager.address, 10000000000)
            await swapManager.connect(impersonatedSigner).swapExactInputSingle(
                1000000,
                USDC_ADDRESS,
                WBTC_ADDRESS
            )

            const balanceAfter = await wbtc.balanceOf(impersonatedSigner.address)

            expect(balanceAfter).be.greaterThan(balanceBefore)

        });
    });

})