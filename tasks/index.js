


task(
    "distributeIDT",
    "distribute the initial IDT tokens",
    require("./distributeIDT")
)
task(
    "sendISS",
    "send ISS tokens to the VotingEscrow contract",
    require("./sendISS")
)

task("getSigners", "show the signers of the current mnemonic", require("./getSigners")).addOptionalParam("n", "how many to show", 3, types.int)

task("approveERC1155", "approve it to transfer my nfts", require("./approveERC1155")).addParam("addr", "the address to approve")


task("checkWireUp", "check wire up", require("./checkWireUp"))
    .addParam("e", "environment testnet/mainet")
    .addParam("contract", "the contract to delete and redeploy")

//
task("checkWireUpAll", "check wire up all", require("./checkWireUpAll"))
    .addParam("e", "environment testnet/mainet")
    .addParam("contract", "name of contract")
    .addOptionalParam("proxyContract", "name of proxy contract")
    .addOptionalParam("proxyChain", "name of proxy chain")

//
task(
    "setTrustedRemote",
    "setTrustedRemote(chainId, sourceAddr) to enable inbound/outbound messages with your other contracts",
    require("./setTrustedRemote")
)
    .addParam("targetNetwork", "the target network to set as a trusted remote")
    .addOptionalParam("localContract", "Name of local contract if the names are different")
    .addOptionalParam("remoteContract", "Name of remote contract if the names are different")
    .addOptionalParam("contract", "If both contracts are the same name")

//
task(
    "mintISS",
    "mint the initial ISS supply to the multisig address",
    require("./mintISS")
)


//
task("oftSend", "send tokens to another chain", require("./oftSend"))
    .addParam("qty", "qty of tokens to send")
    .addParam("targetNetwork", "the target network to let this instance receive messages from")
    .addOptionalParam("localContract", "Name of local contract if the names are different")
    .addOptionalParam("remoteContract", "Name of remote contract if the names are different")
    .addOptionalParam("contract", "If both contracts are the same name")

//

task("ownerOf", "ownerOf(tokenId) to get the owner of a token", require("./ownerOf"))
    .addParam("contract", "Name of contract")
    .addParam("tokenId", "the tokenId of ONFT")

//

task("setMinDstGas", "set min gas required on the destination gas", require("./setMinDstGas"))
    .addParam("packetType", "message Packet type")
    .addParam("targetNetwork", "the chainId to transfer to")
    .addParam("contract", "contract name")
    .addParam("minGas", "min gas")

//


// npx hardhat deployWireCheck --e testnet --contract ExampleOFT --proxy-contract ExampleBasedOFT --proxy-chain optimism-kovan
// npx hardhat deployWireCheck --e testnet --contract ExampleUniversalONFT721
task("deployWireCheck", "", require("./deployWireCheck"))
    .addParam("e", "environment testnet/mainet")
    .addParam("contract", "")
    .addOptionalParam("proxyChain", "")
    .addOptionalParam("proxyContract", "")

//
task("getStoredPayloadEvent", "Detect and clear stored payload", require("./getStoredPayloadEvent"))
    .addParam("txStart", "provide a transaction hash in the block you want to start in")
    .addParam("srcAddress", "")
    .addParam("desAddress", "")
    .addOptionalParam("txEnd", "provide a tx hash in the block you want to end at")
    .addOptionalParam("step", "provide a tx hash in the block you want to end at", 1000, types.int)
    .addOptionalParam("nonce", "nonce to clear")

//
task("getMessageFailedEvent", "Detect and clear failed message", require("./getMessageFailedEvent"))
    .addParam("txStart", "provide a transaction hash in the block you want to start in")
    .addParam("dstUa", "address of dst UA")
    .addOptionalParam("txEnd", "provide a tx hash in the block you want to end at")
    .addOptionalParam("step", "provide a tx hash in the block you want to end at", 1000, types.int)
    .addOptionalParam("nonce", "nonce to clear")

//
task("isFailedMessage", "check if failed message", require("./isFailedMessage"))
    .addParam("srcChainId", "")
    .addParam("srcAddress", "")
    .addParam("desAddress", "")
    .addParam("nonce", "")

//
task("isStoredPayload", "check if stored payload", require("./isStoredPayload"))
    .addParam("srcChainId", "")
    .addParam("srcAddress", "")
    .addParam("desAddress", "")
    .addOptionalParam("payload", "")
    .addOptionalParam("clear", "", false, types.boolean)
