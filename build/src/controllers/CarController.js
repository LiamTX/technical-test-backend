"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var connection_1 = __importDefault(require("../database/connection"));
var CarController = /** @class */ (function () {
    function CarController() {
    }
    //Listagem de todos os carros
    CarController.prototype.index = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var cars, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, connection_1.default('cars')];
                    case 1:
                        cars = _a.sent();
                        return [2 /*return*/, res.json(cars)];
                    case 2:
                        error_1 = _a.sent();
                        console.log(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /*
        Cadastro de carros, deve ser enviado junto ao corpo da requisição um json
        com as seguintes informações do carro -> brand: string, model: string, name: string,
        fabrication_date: string, price: float, color: string
    */
    CarController.prototype.create = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, brand, model, name_1, fabrication_date, price, color, error_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = req.body, brand = _a.brand, model = _a.model, name_1 = _a.name, fabrication_date = _a.fabrication_date, price = _a.price, color = _a.color;
                        return [4 /*yield*/, connection_1.default('cars').insert({
                                brand: brand,
                                model: model,
                                name: name_1,
                                fabrication_date: fabrication_date,
                                price: price,
                                color: color
                            })];
                    case 1:
                        _b.sent();
                        return [2 /*return*/, res.send()];
                    case 2:
                        error_2 = _b.sent();
                        console.log(error_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /*
        Ache um carro em especifico, deve ser enviado junto aos params da requisição o
        id do carro que deseja achar
    */
    CarController.prototype.findOne = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var car_id, car, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        car_id = req.params.car_id;
                        return [4 /*yield*/, connection_1.default('cars').where('id', car_id).first()];
                    case 1:
                        car = _a.sent();
                        if (!car)
                            return [2 /*return*/, res.status(404).send({ error: 'car not found' })];
                        return [2 /*return*/, res.json(car)];
                    case 2:
                        error_3 = _a.sent();
                        console.log(error_3);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /*
        Edição das informações de um carro, deve ser enviado junto ao corpo da requisição um json
        com as seguintes informações do carro -> id: integer, brand: string, model: string,
        name: string, fabrication_date: string, price: float, color: string
    */
    CarController.prototype.edit = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, id, brand, model, name_2, fabrication_date, price, color, car, error_4;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 3, , 4]);
                        _a = req.body, id = _a.id, brand = _a.brand, model = _a.model, name_2 = _a.name, fabrication_date = _a.fabrication_date, price = _a.price, color = _a.color;
                        return [4 /*yield*/, connection_1.default('cars').where('id', id).first()];
                    case 1:
                        car = _b.sent();
                        if (!car)
                            return [2 /*return*/, res.status(404).send({ error: 'not found' })];
                        return [4 /*yield*/, connection_1.default('cars')
                                .where('id', car.id)
                                .update({
                                brand: brand,
                                model: model,
                                name: name_2,
                                fabrication_date: fabrication_date,
                                price: price,
                                color: color
                            })];
                    case 2:
                        _b.sent();
                        return [2 /*return*/, res.send()];
                    case 3:
                        error_4 = _b.sent();
                        console.log(error_4);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /*
        Delete um carro, deve ser enviado junto aos params da requisição o id do carro
        que deseja deletar
    */
    CarController.prototype.delete = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var car_id, car, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        car_id = req.params.car_id;
                        return [4 /*yield*/, connection_1.default('cars').where('id', car_id).first()];
                    case 1:
                        car = _a.sent();
                        if (!car)
                            return [2 /*return*/, res.status(404).send({ error: 'car not found' })];
                        return [4 /*yield*/, connection_1.default('cars').where('id', car.id).del()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, res.sendStatus(200)];
                    case 3:
                        error_5 = _a.sent();
                        console.log(error_5);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return CarController;
}());
exports.default = new CarController();
