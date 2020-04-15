import faker from "faker";

export const tables = [
  {
    tableId: faker.random.uuid(),
    tableNum: faker.random.number({ min: 0, max: 200 }),
    tableNote: faker.lorem.sentence(),
    waiterName: faker.name.firstName(),
    totalPrice: faker.random.number({ min: 0.0, max: 1000.0, precision: 0.01 }),
    isAlert: faker.random.boolean(),
  },
  {
    tableId: faker.random.uuid(),
    tableNum: faker.random.number({ min: 0, max: 200 }),
    tableNote: faker.lorem.sentence(),
    waiterName: faker.name.firstName(),
    totalPrice: faker.random.number({ min: 0.0, max: 1000.0, precision: 0.01 }),
    isAlert: faker.random.boolean(),
  },
  {
    tableId: faker.random.uuid(),
    tableNum: faker.random.number({ min: 0, max: 200 }),
    tableNote: faker.lorem.sentence(),
    waiterName: faker.name.firstName(),
    totalPrice: faker.random.number({ min: 0.0, max: 1000.0, precision: 0.01 }),
    isAlert: faker.random.boolean(),
  },
  {
    tableId: faker.random.uuid(),
    tableNum: faker.random.number({ min: 0, max: 200 }),
    tableNote: faker.lorem.sentence(),
    waiterName: faker.name.firstName(),
    totalPrice: faker.random.number({ min: 0.0, max: 1000.0, precision: 0.01 }),
    isAlert: faker.random.boolean(),
  },
  {
    tableId: faker.random.uuid(),
    tableNum: faker.random.number({ min: 0, max: 200 }),
    tableNote: faker.lorem.sentence(),
    waiterName: faker.name.firstName(),
    totalPrice: faker.random.number({ min: 0.0, max: 1000.0, precision: 0.01 }),
    isAlert: faker.random.boolean(),
  },
  {
    tableId: faker.random.uuid(),
    tableNum: faker.random.number({ min: 0, max: 200 }),
    tableNote: faker.lorem.sentence(),
    waiterName: faker.name.firstName(),
    totalPrice: faker.random.number({ min: 0.0, max: 1000.0, precision: 0.01 }),
    isAlert: faker.random.boolean(),
  },
  {
    tableId: faker.random.uuid(),
    tableNum: faker.random.number({ min: 0, max: 200 }),
    tableNote: faker.lorem.sentence(),
    waiterName: faker.name.firstName(),
    totalPrice: faker.random.number({ min: 0.0, max: 1000.0, precision: 0.01 }),
    isAlert: faker.random.boolean(),
  },
  {
    tableId: faker.random.uuid(),
    tableNum: faker.random.number({ min: 0, max: 200 }),
    tableNote: faker.lorem.sentence(),
    waiterName: faker.name.firstName(),
    totalPrice: faker.random.number({ min: 0.0, max: 1000.0, precision: 0.01 }),
    isAlert: faker.random.boolean(),
  },
  {
    tableId: faker.random.uuid(),
    tableNum: faker.random.number({ min: 0, max: 200 }),
    tableNote: faker.lorem.sentence(),
    waiterName: faker.name.firstName(),
    totalPrice: faker.random.number({ min: 0.0, max: 1000.0, precision: 0.01 }),
    isAlert: faker.random.boolean(),
  },
  {
    tableId: faker.random.uuid(),

    tableNum: faker.random.number({ min: 0, max: 200 }),
    tableNote: faker.lorem.sentence(),
    waiterName: faker.name.firstName(),
    totalPrice: faker.random.number({ min: 0.0, max: 1000.0, precision: 0.01 }),
    isAlert: faker.random.boolean(),
  },
  {
    tableId: faker.random.uuid(),
    tableNum: faker.random.number({ min: 0, max: 200 }),
    note: faker.lorem.sentence(),
    waiterName: faker.name.firstName(),
    totalPrice: faker.random.number({ min: 0.0, max: 1000.0, precision: 0.01 }),
    isAlert: faker.random.boolean(),
  },
];

export const foodCards = [
  {
    productId: faker.random.uuid(),
    title: faker.name.jobTitle(),
    price: faker.random
      .number({ min: 0.0, max: 20.0, precision: 0.01 })
      .toFixed(2),
    image: faker.image.avatar(),
    description: faker.lorem.sentences(3),
  },
  {
    productId: faker.random.uuid(),
    title: faker.name.jobTitle(),
    price: faker.random
      .number({ min: 0.0, max: 20.0, precision: 0.01 })
      .toFixed(2),
    image: faker.image.avatar(),
    description: faker.lorem.sentences(3),
  },
  {
    productId: faker.random.uuid(),
    title: faker.name.jobTitle(),
    price: faker.random
      .number({ min: 0.0, max: 20.0, precision: 0.01 })
      .toFixed(2),
    image: faker.image.avatar(),
    description: faker.lorem.sentences(3),
  },
  {
    productId: faker.random.uuid(),
    title: faker.name.jobTitle(),
    price: faker.random
      .number({ min: 0.0, max: 20.0, precision: 0.01 })
      .toFixed(2),
    image: faker.image.avatar(),
    description: faker.lorem.sentences(3),
  },
  {
    productId: faker.random.uuid(),
    title: faker.name.jobTitle(),
    price: faker.random
      .number({ min: 0.0, max: 20.0, precision: 0.01 })
      .toFixed(2),
    image: faker.image.avatar(),
    description: faker.lorem.sentences(3),
  },
  {
    productId: faker.random.uuid(),
    title: faker.name.jobTitle(),
    price: faker.random
      .number({ min: 0.0, max: 20.0, precision: 0.01 })
      .toFixed(2),
    image: faker.image.avatar(),
    description: faker.lorem.sentences(3),
  },
  {
    productId: faker.random.uuid(),
    title: faker.name.jobTitle(),
    price: faker.random
      .number({ min: 0.0, max: 20.0, precision: 0.01 })
      .toFixed(2),
    image: faker.image.avatar(),
    description: faker.lorem.sentences(3),
  },
  {
    productId: faker.random.uuid(),
    title: faker.name.jobTitle(),
    price: faker.random
      .number({ min: 0.0, max: 20.0, precision: 0.01 })
      .toFixed(2),
    image: faker.image.avatar(),
    description: faker.lorem.sentences(3),
  },
  {
    productId: faker.random.uuid(),
    title: faker.name.jobTitle(),
    price: faker.random
      .number({ min: 0.0, max: 20.0, precision: 0.01 })
      .toFixed(2),
    image: faker.image.avatar(),
    description: faker.lorem.sentences(3),
  },
];

export const orders = [
  {
    orderId: faker.random.uuid(),
    createdAt: faker.date.recent(1),
    ...tables[0],
  },
  {
    orderId: faker.random.uuid(),
    createdAt: faker.date.recent(1),
    ...tables[0],
  },
  {
    orderId: faker.random.uuid(),
    createdAt: faker.date.recent(1),
    ...tables[0],
  },
];

export const orderedProducts = [
  {
    orderedProductId: faker.random.uuid(),
    note: faker.lorem.sentences(1),
    createdAt: faker.date.recent(1),
    ...foodCards[faker.random.number(7)],
    ...orders[faker.random.number(2)],
  },
  {
    orderedProductId: faker.random.uuid(),
    note: faker.lorem.sentences(0),
    createdAt: faker.date.recent(1),
    ...foodCards[faker.random.number(7)],
    ...orders[faker.random.number(2)],
  },
  {
    orderedProductId: faker.random.uuid(),
    note: faker.lorem.sentences(1),
    createdAt: faker.date.recent(1),
    ...foodCards[faker.random.number(7)],
    ...orders[faker.random.number(2)],
  },
  {
    orderedProductId: faker.random.uuid(),
    note: faker.lorem.sentences(1),
    createdAt: faker.date.recent(1),
    ...foodCards[faker.random.number(7)],
    ...orders[faker.random.number(2)],
  },
  {
    orderedProductId: faker.random.uuid(),
    note: faker.lorem.sentences(0),
    createdAt: faker.date.recent(1),
    ...foodCards[faker.random.number(7)],
    ...orders[faker.random.number(2)],
  },
  {
    orderedProductId: faker.random.uuid(),
    note: faker.lorem.sentences(0),
    createdAt: faker.date.recent(1),
    ...foodCards[faker.random.number(7)],
    ...orders[faker.random.number(2)],
  },
  {
    orderedProductId: faker.random.uuid(),
    note: faker.lorem.sentences(1),
    createdAt: faker.date.recent(1),
    ...foodCards[faker.random.number(7)],
    ...orders[faker.random.number(2)],
  },
  {
    orderedProductId: faker.random.uuid(),
    note: faker.lorem.sentences(1),
    createdAt: faker.date.recent(1),
    ...foodCards[faker.random.number(7)],
    ...orders[faker.random.number(2)],
  },
  {
    orderedProductId: faker.random.uuid(),
    note: faker.lorem.sentences(0),
    createdAt: faker.date.recent(1),
    ...foodCards[faker.random.number(7)],
    ...orders[faker.random.number(2)],
  },
  {
    orderedProductId: faker.random.uuid(),
    note: faker.lorem.sentences(0),
    createdAt: faker.date.recent(1),
    ...foodCards[faker.random.number(7)],
    ...orders[faker.random.number(2)],
  },
  {
    orderedProductId: faker.random.uuid(),
    note: faker.lorem.sentences(1),
    createdAt: faker.date.recent(1),
    ...foodCards[faker.random.number(7)],
    ...orders[faker.random.number(2)],
  },
  {
    orderedProductId: faker.random.uuid(),
    note: faker.lorem.sentences(1),
    createdAt: faker.date.recent(1),
    ...foodCards[faker.random.number(7)],
    ...orders[faker.random.number(2)],
  },
  {
    orderedProductId: faker.random.uuid(),
    note: faker.lorem.sentences(0),
    createdAt: faker.date.recent(1),
    ...foodCards[faker.random.number(7)],
    ...orders[faker.random.number(2)],
  },
  {
    orderedProductId: faker.random.uuid(),
    note: faker.lorem.sentences(1),
    createdAt: faker.date.recent(1),
    ...foodCards[faker.random.number(7)],
    ...orders[faker.random.number(2)],
  },
  {
    orderedProductId: faker.random.uuid(),
    note: faker.lorem.sentences(1),
    createdAt: faker.date.recent(1),
    ...foodCards[faker.random.number(7)],
    ...orders[faker.random.number(2)],
  },
  {
    orderedProductId: faker.random.uuid(),
    note: faker.lorem.sentences(0),
    createdAt: faker.date.recent(1),
    ...foodCards[faker.random.number(7)],
    ...orders[faker.random.number(2)],
  },
  {
    orderedProductId: faker.random.uuid(),
    note: faker.lorem.sentences(0),
    createdAt: faker.date.recent(1),
    ...foodCards[faker.random.number(7)],
    ...orders[faker.random.number(2)],
  },
  {
    orderedProductId: faker.random.uuid(),
    note: faker.lorem.sentences(1),
    createdAt: faker.date.recent(1),
    ...foodCards[faker.random.number(7)],
    ...orders[faker.random.number(2)],
  },
];
