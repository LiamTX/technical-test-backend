"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandlerApi = void 0;
function errorHandlerApi(err, req, res, next) {
    console.log("error handler executed with error: " + err);
    res.status(500).json({
        errorCode: 'ERR-001',
        message: 'Internal error'
    });
}
exports.errorHandlerApi = errorHandlerApi;
