const LZ_ENDPOINTS = require("../constants/layerzeroEndpoints.json")

module.exports = async function ({ deployments, getNamedAccounts }) {
    const { deploy } = deployments
    const { deployer } = await getNamedAccounts()
    console.log(`>>> your address: ${deployer}`)

    const lzEndpointAddress = LZ_ENDPOINTS[hre.network.name]
    console.log(`[${hre.network.name}] Endpoint Address: ${lzEndpointAddress}`)

    // Deploy the ISS conctract
    var tokenName
    var tokenSymbol
    if (hre.network.name === "bera-artio")
    {
        tokenName = "ISSUAA Bera Protocol Token"
        tokenSymbol = "bISS"
    }
    else{
        tokenName = "ISSUAA Protocol Token"
        tokenSymbol = "ISS"
    }
   
    const initialSupply = (BigInt(100000000) * BigInt(1e18)).toString()
    console.log(initialSupply)

    const governanceToken = await deploy("ISS", {
        from: deployer,
        args: [tokenName, tokenSymbol, lzEndpointAddress, initialSupply],
        log: true,
        waitConfirmations: 1,
    })

    // VERIFY the ISS Contract
    await hre.run("verify:verify", {
        address: governanceToken.address,
        contract: "contracts/token/ISS.sol:ISS",
        constructorArguments: [tokenName,tokenSymbol,lzEndpointAddress,initialSupply],
    });
}

module.exports.tags = ["ISS"]
