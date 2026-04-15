import { orderTotal as orderTotal } from "./order-total.js";

it("it works", () => {
  expect(1).toBe(1);
});

// Test 01
if (
  orderTotal({
    items: [
      { name: "Dragon food", price: 8, quantity: 1 },
      { name: "Dragon cage (small)", price: 800, quantity: 1 },
    ],
  }) !== 808
) {
  throw new Error("Check fail: Happy path (Example 1)");
}

// Test 02
if (
  orderTotal({
    items: [
      { name: "Dragon collar", price: 20, quantity: 1 },
      { name: "Dragon chew toy", price: 40, quantity: 1 },
    ],
  }) !== 60
) {
  throw new Error("Check fail: Happy path (Example 2)");
}

// Test 03
if (
  orderTotal({
    items: [{ name: "Dragon candy", price: 2, quantity: 3 }],
  }) !== 6
) {
  throw new Error("Check fail: Quantity");
}

// Test 04
if (
  orderTotal({
    items: [{ name: "Dragon candy", price: 3 }],
  }) !== 3
) {
  throw new Error("Check fail: no quantity specified");
}
