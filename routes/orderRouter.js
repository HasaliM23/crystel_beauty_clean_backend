import express from "express";
import { createOrder, getOrders } from "../controlles/orderController.js";

const orderRouter = express.Router();

orderRouter.post("/", createOrder);
orderRouter.get("/", getOrders);


export default orderRouter;