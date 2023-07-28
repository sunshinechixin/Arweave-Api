/*Timing task*/

// After the project starts, the scheduled task will be started in five seconds
exports.taskStart = function taskStart(){
    console.log(`Tasks start loading`);

    taskWalletModule();
}

async function taskWalletModule() {
    console.log("task I   (6s)  ========>  synchronization taskWalletModule...");

    const walletModule = require("./arweavekit/walletModule");
    await walletModule.createWallet();// 创建钱包
}





