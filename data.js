const faker = require("faker");
const products = [];
const categories = ["Watersports", "Soccer", "Chess", "Running"];
faker.seed(100);
for (let i = 1; i <= 503; i++) {
  const category = faker.helpers.randomize(categories);
  products.push({
    id: i,
    name: faker.commerce.productName(),
    category,
    description: `${category}: ${faker.lorem.sentence(3)}`,
    price: parseFloat(faker.commerce.price()),
  });
}

const orders = [];
for (let i = 0; i++; i < 103) {
  const fname = faker.name.findName();
  const lname = faker.name.lastName();
  const order = {
    id: i,
    email: faker.internet.email(fname, lname),
    address: faker.address.streetAddress(),
    city: faker.address.city(),
    country: faker.address.country(),
    shipped: faker.random.boolean(),
    products: [],
  };
  var productCount = faker.random.number({ min: 1, max: 5 });
  var product_ids = [];
  while (product_ids.length < productCount) {
    var candidateId = faker.random.number({ min: 1, max: products.length });
    if (product_ids.indexOf(candidateId) === -1) {
      product_ids.push(candidateId);
    }
  }
  for (let j = 0; j < productCount; j++) {
    order.products.push({
      quantity: faker.random.number({ min: 1, max: 10 }),
      product_id: product_ids[j],
    });
  }
  orders.push(order);
}
module.exports = function () {
  return {
    categories,
    products,
    orders: [],
  };
};
