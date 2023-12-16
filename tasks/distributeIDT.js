const airdropEntries = require("../constants/migration.json")
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));


module.exports = async function (taskArgs, hre) {
    const IDT = await ethers.getContract("IDT")
    let legacyTokenNumber = BigInt(0)
    for (let i=0; i<airdropEntries.length;i++) {
        let _address = airdropEntries[i][0]
        let _amount = BigInt(airdropEntries[i][1])
        legacyTokenNumber += BigInt(_amount)
        let tx = await (await IDT.transfer(_address, _amount)).wait()
        console.log(`${(airdropEntries[i][1]/1e18)} token sent to ${_address}. tx: ${tx.transactionHash}`)
        await sleep(2000)
    }
    
}