// restApiConfig
exports.restApiConfig = function restApiConfig(app){
    app.use("/v1/wallet", require("./../api/wallet/wallet"));

    console.log(`RestApi start loading`);
}