import { products } from "../data/products";

const withDelay = (data, delayMs = 700) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(data), delayMs);
  });

export const getProducts = (categoryId) => {
  const data = categoryId
    ? products.filter((p) => p.category === categoryId)
    : products;

  return withDelay(data);
};

export const getProductById = (id) => {
  const product = products.find((p) => p.id === id) || null;
  return withDelay(product);
};
