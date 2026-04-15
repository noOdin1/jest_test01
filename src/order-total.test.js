import { orderTotal as orderTotal } from "./order-total.js";

// it("it works", () => {
//   expect(1).toBe(1);
// });

const emptyFunction = () => {};
const anotherEmptyfunction = () => {};

it("Calls vatapi.com correctly", () => {
  // These 2 parts are mock values to simulate actual fetch from a website
  let fakeFetchCalled = false;
  const fakeProcess = {
    env: {
      VAT_API_KEY: "key123",
    },
  };
  const fakeFetch = (url, opts) => {
    expect(opts.headers.apikey).toBe("key123");
    expect(url).toBe("https://jsonplaceholder.typicode.com/todos/1");
    isFakeFetchCalled = true;
    return Promise.resolve({
      json: () =>
        Promise.resolve({
          rates: {
            standard: {
              value: 19,
            },
          },
        }),
    });
  };

  return orderTotal(fakeFetch, fakeProcess, {
    country: "DE",
    suffix: "1", // my own mock data
    items: [{ name: "Dragon waffles", price: 20, quantity: 2 }],
  }).then((result) => {
    expect(result).toBe(20 * 2 * 1.19);
    expect(isFakeFetchCalled).toBe(true);
  });
});

it("If country code specified", () => {});

it("Quantity", () =>
  orderTotal(emptyFunction, anotherEmptyfunction, {
    items: [{ name: "Dragon candy", price: 2, quantity: 3 }],
  }).then((result) => expect(result).toBe(6)));

it("No Quantity specified", () =>
  orderTotal(emptyFunction, anotherEmptyfunction, {
    items: [{ name: "Dragon candy", price: 3 }],
  }).then((result) => expect(result).toBe(3)));

it("Happy path (Example 1)", () =>
  orderTotal(emptyFunction, anotherEmptyfunction, {
    items: [
      { name: "Dragon food", price: 8, quantity: 1 },
      { name: "Dragon cage (small)", price: 800, quantity: 1 },
    ],
  }).then((result) => expect(result).toBe(808)));

it("Happy path (Example 2)", () =>
  orderTotal(emptyFunction, anotherEmptyfunction, {
    items: [
      { name: "Dragon collar", price: 20, quantity: 1 },
      { name: "Dragon chew toy", price: 40, quantity: 1 },
    ],
  }).then((result) => expect(result).toBe(60)));
