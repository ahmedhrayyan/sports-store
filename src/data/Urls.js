import { DataTypes } from "./Types";
const protocol = "http";
const hostname = "localhost";
const port = 3500;
export const RestUrls = {
  [DataTypes.PRODUCTS]: `${protocol}://${hostname}:${port}/api/products`,
  [DataTypes.CATEGORIES]: `${protocol}://${hostname}:${port}/api/categories`,
};

export const GraphQlUrl = `${protocol}://${hostname}:${port}/graphql`;
export const authUrl = `${protocol}://${hostname}:${port}/login`;
