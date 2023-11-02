const airdropEntries = require("../constants/migration.json")

module.exports = async function (taskArgs, hre) {
    const votingEscrowAddress = '0x9A0E6e487f40AC0e639789788D7caF56B33713CF'
    const ISS = await ethers.getContract("ISS")
    let legacyTokenNumber = BigInt(40000000) * BigInt(1e18)
    
    let tx = await (await ISS.transfer(votingEscrowAddress, legacyTokenNumber)).wait()
    console.log(`50m ISS tokens token sent to ${votingEscrowAddress}. tx: ${tx.transactionHash}`)
    
}