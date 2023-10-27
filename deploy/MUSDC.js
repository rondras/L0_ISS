
module.exports = async function ({ deployments, getNamedAccounts }) {
    const { deploy } = deployments
    const { deployer } = await getNamedAccounts()
    console.log(`>>> your address: ${deployer}`)

    // Deploy the MOCKUSDC conctract
    const tokenName = "MOCK USDC"
    const tokenSymbol = "MUSDC"
    
    const mUSDC = await deploy("MockUSDC", {
        from: deployer,
        args: [tokenName, tokenSymbol],
        log: true,
        waitConfirmations: 1,
    })

    // VERIFY the MOCKUSDC Contract
    await hre.run("verify:verify", {
        address: mUSDC.address,
        contract: "contracts/token/MockUSDC.sol:MockUSDC",
        constructorArguments: [tokenName,tokenSymbol],
    });
}

module.exports.tags = ["MUSDC"]
