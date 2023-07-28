/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50733
Source Host           : localhost:3306
Source Database       : arweave_api

Target Server Type    : MYSQL
Target Server Version : 50733
File Encoding         : 65001

Date: 2023-07-28 11:26:48
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for wallet_info
-- ----------------------------
DROP TABLE IF EXISTS `wallet_info`;
CREATE TABLE `wallet_info` (
  `zid` bigint(20) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增ID',
  `address` varchar(200) DEFAULT NULL COMMENT '钱包地址',
  `private key` varchar(200) DEFAULT NULL COMMENT '私钥',
  `create_time` datetime DEFAULT NULL COMMENT '创建时间',
  `tag` varchar(50) DEFAULT NULL COMMENT '标签',
  PRIMARY KEY (`zid`),
  UNIQUE KEY `address` (`address`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of wallet_info
-- ----------------------------
INSERT INTO `wallet_info` VALUES ('1', 'arweavetomoon', 'key001', '2023-07-28 11:16:36', 'me');
