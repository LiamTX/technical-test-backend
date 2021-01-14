"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var router_1 = __importDefault(require("./routes/router"));
var error_handler_api_1 = require("./middlewares/error-handler-api");
var app = express_1.default();
app.use(cors_1.default());
app.use(express_1.default.json());
app.use(router_1.default);
app.use(error_handler_api_1.errorHandlerApi);
var port = 3333 || process.env.PORT;
app.listen(port, function () { return console.log('Started!'); });
