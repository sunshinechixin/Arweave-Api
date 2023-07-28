/* Start the project */

// ================Startup environment ( start_dev | start_test | start_pro )=============

start_dev();

// =======================================================================================

// arweave start Set
var arweave_url;
var arweave_port;
function start_dev(){
    console.log("start_dev ing")
    arweave_url = "127.0.0.1";
    arweave_port = "8080";
    global.mysqlGlobal = require("./config/mysql/localhost-mysql.json")
}

// Arouse the express
const express = require("express");
const app = express();

// Arouse the swagger
const swagger = require("./config/swagger");
swagger.swaggerConfig(app,arweave_url,arweave_port);

// Arouse the service
const service = require("./config/service");
service.serviceConfig(app,arweave_url,arweave_port);

// Arouse rest api
const restApi = require("./config/restApi");
restApi.restApiConfig(app);

// Arouse the task
const timingTask = require("./blockchain/timing-task");
timingTask.taskStart();
