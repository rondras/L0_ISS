module.exports = async function (taskArgs, hre) {
    const signers = await ethers.getSigners()
    const multiSigAddress = signers[0].address
    console.log(multiSigAddress)
    const mintAmount = BigInt(100000000) * BigInt(1e18)
    const ISS = await ethers.getContract("ISS")
    let tx = await (await ISS.mint(multiSigAddress, mintAmount)).wait()
    console.log(`Initial supply minted tx: ${tx.transactionHash}`)
}