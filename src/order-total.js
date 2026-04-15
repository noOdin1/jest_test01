// function orderTotal(order) {
//   return order.items.reduce(
//     (prev, cur) => cur.price * (cur.quantity || 1) + prev,
//     0,
//   );
// }

function orderTotal(fetch, process, order) {
  if (order.country) {
    return (
      fetch("https://jsonplaceholder.typicode.com/todos/" + order.suffix, {
        headers: { apikey: "key123" },
      })
        //NOTE: I changed this part because I don't have access to the API.
        //      as a substitue I return a 'json' object to the next 'then'
        .then((response) =>
          Promise.resolve({ rates: { standard: { value: 19 } } }),
        )
        .then((data) => data.rates.standard.value)
        .then(
          // console.log(order.items),
          // console.log(vat),
          (vat) =>
            order.items.reduce(
              (prev, cur) => cur.price * (cur.quantity || 1) + prev,
              0,
            ) *
            (1 + vat / 100),
        )
    );
  }
  return Promise.resolve(
    order.items.reduce(
      (prev, cur) => cur.price * (cur.quantity || 1) + prev,
      0,
    ),
  );
}

export { orderTotal };
