
module.exports = async function ({ deployments, getNamedAccounts }) {
    const { deploy } = deployments
    const { deployer } = await getNamedAccounts()
    console.log(`>>> your address: ${deployer}`)

    // Deploy the TWIN conctract
    const tokenName = "TWIN Distribution Token"
    const tokenSymbol = "TWIND"
    const initialSupply = (BigInt(50000000) * BigInt(1e18)).toString()
    console.log(initialSupply)

    const governanceToken = await deploy("TWIND", {
        from: deployer,
        args: [tokenName, tokenSymbol, initialSupply],
        log: true,
        waitConfirmations: 1,
    })

    // VERIFY the ISS Contract
    await hre.run("verify:verify", {
        address: governanceToken.address,
        contract: "contracts/token/TWIND.sol:TWIND",
        constructorArguments: [tokenName,tokenSymbol,initialSupply],
    });
}

module.exports.tags = ["TWIND"]

 