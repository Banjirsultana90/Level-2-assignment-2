"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const product_route_1 = require("./app/modules/products/product.route");
const order_routes_1 = require("./app/modules/orders/order.routes");
const notfound_1 = __importDefault(require("./app/midleware/notfound"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/api/products', product_route_1.ProductRoutes);
app.use('/api/orders', order_routes_1.OrderRoutes);
app.use(notfound_1.default);
app.get("/", (req, res) => {
    res.send("Hello World!");
});
exports.default = app;
