const someOrder01 = {
  items: [
    { name: "Dragon food", price: 8, quantity: 8 },
    { name: "Dragon cage (small)", price: 800, quantity: 2 },
    { name: "Shipping", price: 40, shipping: true },
  ],
};

// Order total before adding shipping
// const orderTotal = (order) =>
//   order.items.reduce((prev, cur) => prev + cur.price * cur.quantity, 0);

// orderTotal after adding shipping
const orderTotal01 = (order) => {
  const totalItems = order.items
    .filter((x) => !x.shipping)
    .reduce((prev, cur) => prev + cur.price * cur.quantity, 0);
  const shippingItem = order.items.find((x) => !!x.shipping);
  const shipping = totalItems > 1000 ? 0 : shippingItems.price;
  return totalItems + shipping;
};

result = orderTotal01(someOrder01);

// Writing the test first

// The code implementation
function orderTotal(order) {
  return order.items.reduce(
    (prev, cur) => cur.price * (cur.quantity || 1) + prev,
    0,
  );
}

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
