﻿const CONSTANTS = {};
CONSTANTS.ENDPOINT = {};

CONSTANTS.PORT = process.env.PORT || "3001";
CONSTANTS.ENDPOINT.LIST = "/list";
CONSTANTS.ENDPOINT.METERDETAILS="/meterData";
CONSTANTS.ENDPOINT.METERSERIALNUMBERS="/meterSerialNumbers";
module.exports = CONSTANTS;
