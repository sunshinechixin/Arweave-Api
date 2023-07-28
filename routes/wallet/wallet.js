var express = require('express');
var router = express.Router();

const wallet = require('../../api/wallet/wallet');

/**
 * @swagger
 * /v1/wallet/getWalletInfoByAddress:
 *   get:
 *     tags:
 *       - Wallet
 *     description: Return Wallet Info
 *     produces:
 *       - "application/xml"
 *       - "application/json"
 *     parameters:
 *       - name: address
 *         description:
 *         in: query
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Return Wallet Info
 *         schema:
 */
router.get('/v1/wallet/getWalletInfoByAddress', wallet.getWalletInfoByAddress);

module.exports = router;
