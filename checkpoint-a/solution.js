// Checkpoint A — your work goes in this file.
//
// Read checkpoint-a/spec.md. It was written for your GitHub account and it is
// the only description of the task that matters.
//
// Check your work with:  npm test a

import { findAllOrders, findOrderById } from "./orders-db.js";

// 1. Every order from the database. The database is slow, so we await it.
export async function loadOrders() {
  const orders = await findAllOrders();
  return orders;
}

// 2. Only orders that are BOTH from Alexandria AND paid.
export function myOrders(orders) {
  return orders.filter(
    (order) => order.city === "Alexandria" && order.status === "paid"
  );
}

// 3. Total revenue: price is for ONE item, so multiply by quantity, then add up.
//    Starting reduce at 0 means an empty list gives 0.
export function summarize(orders) {
  return orders.reduce((total, order) => total + order.price * order.quantity, 0);
}

// 4. "{student}: {item} x{quantity}", or "Missing order: {id}" if the lookup
//    rejects. The try/catch means this never throws.
export async function describeOrder(id) {
  try {
    const { student, item, quantity } = await findOrderById(id);
    return `${student}: ${item} x${quantity}`;
  } catch (error) {
    return `Missing order: ${id}`;
  }
}

// 5. Keep only student and city (in that order), then turn it into JSON text.
export function toJsonLines(orders) {
  const slim = orders.map((order) => ({ student: order.student, city: order.city }));
  return JSON.stringify(slim);
}
