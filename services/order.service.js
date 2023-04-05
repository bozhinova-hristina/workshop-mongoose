import { Order } from "../models/course.model.js";

export class OrderService {
  // 1. Get all Orders
  static async getAllOrders() {
    return Order.find({});
  }
  //   2. Get orders by id
  static async getOrderById(OrderId) {
    const order = Order.findById(OrderId).populate("orders");

    if (!course) throw new Error("Order not found");

    return order;
  }
  //   3. Create order
  static async createOrder(orderData) {
    if (orderData._id) throw new Error("Invalid data");

    const newOrder = new Order(orderData);

    const createdOrder = await newOrder.save();

    return createdOrder;
  }
}
