module.exports = async function ({ deployments, getNamedAccounts }) {
    const { deploy } = deployments
    const { deployer } = await getNamedAccounts()
    console.log(`>>> your address: ${deployer}`)

    // Deploy the TWIN conctract
    const tokenName = "TWIN Protocol Token"
    const tokenSymbol = "TWIN"
    const initialSupply = (BigInt(100000000) * BigInt(1e18)).toString()
    console.log(initialSupply)

    const governanceToken = await deploy("TWIN", {
        from: deployer,
        args: [tokenName, tokenSymbol, initialSupply],
        log: true,
        waitConfirmations: 1,
    })

    // VERIFY the ISS Contract
    await hre.run("verify:verify", {
        address: governanceToken.address,
        contract: "contracts/token/TWIN.sol:TWIN",
        constructorArguments: [tokenName,tokenSymbol,initialSupply],
    });
}

module.exports.tags = ["TWIN"]
