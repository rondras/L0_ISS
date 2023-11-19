const airdropEntries = require("../constants/migration.json")

module.exports = async function (taskArgs, hre) {
    const votingEscrowAddress = '0x3eb747ecD5e85D2EE92Ed92BD401531F0718D9c9'
    const DAOAddress = '0x6BA799562d73AB1C09CB8f872F3d3ab31F14fB1c'
    const ISS = await ethers.getContract("ISS")
    let legacyTokenNumber = BigInt(50000000) * BigInt(1e18)
    let DAOTokenNumber = BigInt(10000000) * BigInt(1e18)
    
    let tx = await (await ISS.transfer(votingEscrowAddress, legacyTokenNumber)).wait()
    console.log(`50m ISS tokens token sent to ${votingEscrowAddress}. tx: ${tx.transactionHash}`)
    
    tx = await (await ISS.transfer(DAOAddress, DAOTokenNumber)).wait()
    console.log(`10m ISS tokens token sent to ${DAOAddress}. tx: ${tx.transactionHash}`)
    
}