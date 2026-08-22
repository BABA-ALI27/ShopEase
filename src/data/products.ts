import { ImageSourcePropType } from "react-native";

export type Product = {
  id: string;
  name: string;
  price: number;
  rating: number;
  category: string;
  image: ImageSourcePropType;
  description: string;
};

export const products: Product[] = [
  {
    id: "1",
    name: "Miami Mami",
    price: 49.99,
    rating: 4.6,
    category: "Fragrance",
    image: require("../../assets/products/Miami Mami.jpeg"),
    description: "A vibrant, tropical fragrance with warm, sun-kissed notes.",
  },
  {
    id: "2",
    name: "Diamonds and Rubies",
    price: 64.99,
    rating: 4.7,
    category: "Fragrance",
    image: require("../../assets/products/Diamonds and Rubies.jpeg"),
    description: "A bold, glamorous scent set with rich, jewel-toned notes.",
  },
  {
    id: "3",
    name: "Sand and Fog",
    price: 54.99,
    rating: 4.5,
    category: "Fragrance",
    image: require("../../assets/products/Sand and Fog.jpeg"),
    description: "An earthy, atmospheric blend inspired by coastal mornings.",
  },
  {
    id: "4",
    name: "Marshmallow",
    price: 39.99,
    rating: 4.8,
    category: "Fragrance",
    image: require("../../assets/products/Marshmallow.jpeg"),
    description: "A soft, sweet, cozy scent with warm vanilla undertones.",
  },
  {
    id: "5",
    name: "Calvin Klein",
    price: 59.99,
    rating: 4.4,
    category: "Fragrance",
    image: require("../../assets/products/Calvin Klien.jpeg"),
    description: "A clean, classic fragrance with a crisp, timeless finish.",
  },
  {
    id: "6",
    name: "Smile",
    price: 44.99,
    rating: 4.6,
    category: "Fragrance",
    image: require("../../assets/products/Smile.jpeg"),
    description: "A bright, uplifting scent set designed to lift your mood.",
  },
  {
    id: "7",
    name: "White Diamond",
    price: 69.99,
    rating: 4.7,
    category: "Fragrance",
    image: require("../../assets/products/White Diamond.jpeg"),
    description: "An elegant, radiant fragrance with a luminous finish.",
  },
  {
    id: "8",
    name: "Ultimate Kit",
    price: 89.99,
    rating: 4.9,
    category: "Gift Set",
    image: require("../../assets/products/Ultimate Kit.jpeg"),
    description: "A complete fragrance kit with everything you need to get started.",
  },
  {
    id: "9",
    name: "Bargat",
    price: 47.99,
    rating: 4.3,
    category: "Fragrance",
    image: require("../../assets/products/Bargat.jpeg"),
    description: "A rich, sophisticated scent with deep, lasting warmth.",
  },
  {
    id: "10",
    name: "The Scent Club",
    price: 34.99,
    rating: 4.8,
    category: "Gift Set",
    image: require("../../assets/products/The Scent Club.jpeg"),
    description: "A curated fragrance box featuring a rotating set of favorites.",
  },
  {
    id: "11",
    name: "Yara",
    price: 52.99,
    rating: 4.6,
    category: "Fragrance",
    image: require("../../assets/products/Yara.jpeg"),
    description: "A sweet, floral fragrance with a soft, romantic character.",
  },
  {
    id: "12",
    name: "Guess",
    price: 57.99,
    rating: 4.4,
    category: "Fragrance",
    image: require("../../assets/products/Guess.jpeg"),
    description: "A modern, confident scent with a bold signature finish.",
  },
];