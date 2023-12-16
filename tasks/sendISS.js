const airdropEntries = require("../constants/migration.json")

module.exports = async function (taskArgs, hre) {
    const votingEscrowAddress = '0xB28e2d5602280C42641471FAE46E8deF9458Ae60'
    const DAOAddress = '0xB28e2d5602280C42641471FAE46E8deF9458Ae60'
    const ISS = await ethers.getContract("ISS")
    let legacyTokenNumber = BigInt(50000000) * BigInt(1e18)
    let DAOTokenNumber = BigInt(5000000) * BigInt(1e18)
    
    console.log("TEST")
    let tx = await (await ISS.transfer(votingEscrowAddress, legacyTokenNumber)).wait()
    console.log(`50m ISS tokens token sent to ${votingEscrowAddress}. tx: ${tx.transactionHash}`)
    
    //tx = await (await ISS.transfer(DAOAddress, DAOTokenNumber)).wait()
    console.log(`5m ISS tokens token sent to ${DAOAddress}. tx: ${tx.transactionHash}`)
    
}