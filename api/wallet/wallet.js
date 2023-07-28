// Global Express Framework
const express = require("express");
const router = express.Router();
const url = require('url');

// Load configuration file
const mysql = require("mysql");
const conn = mysql.createConnection(global.mysqlGlobal);
module.exports = router;

// 1. WalletInfo
exports.getWalletInfoByAddress = router.get("/getWalletInfoByAddress", (req, res) => {
    // Parsing URL parameters
    var params = url.parse(req.url, true).query;
    let address = params.address;

    const sqlStr = "select address,DATE_FORMAT(create_time,'%Y-%c-%d %H:%i:%s') as create_time,tag from wallet_info where address = ?"

    let selectParams = [ address ]
    conn.query(sqlStr, selectParams, (err, result) => {
        if (err) return res.send({code: 10000, data: "For failure"});
        res.send({
            code: 0, data: result
        });
    });
});

