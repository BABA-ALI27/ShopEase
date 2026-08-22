import { Product } from "../data/products";

export type HomeStackParamList = {
  ProductList: undefined;
  ProductDetails: { product: Product };
};

export type CartStackParamList = {
  CartMain: undefined;
};

export type ProfileStackParamList = {
  ProfileMain: undefined;
};

export type RootTabParamList = {
  Home: undefined;
  Cart: undefined;
  Profile: undefined;
};
