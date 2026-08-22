# ShopEase — React Native / Expo eCommerce App

A product catalogue, product details screen, and cart built with Expo and
React Navigation, inspired by the ShopEase Figma UI kit.

## Getting started

1. Unzip this project and open a terminal in the project folder.
2. Install dependencies:
   ```bash
   npm install
   ```
   If Expo warns about mismatched package versions after install, run:
   ```bash
   npx expo install --fix
   ```
3. Start the dev server:
   ```bash
   npx expo start
   ```
4. Scan the QR code with the Expo Go app (iOS/Android), or press `i` / `a`
   in the terminal to open an iOS/Android simulator, or `w` for web.

## Project structure

```
App.tsx                          Entry point: wraps the app in CartProvider + navigation
src/
  theme.ts                       Flat color palette, spacing, type scale
  data/products.ts                Static product array (id, name, price, rating, image, description)
  context/CartContext.tsx         Cart state (add/remove/increase/decrease) shared app-wide
  components/ProductCard.tsx      Reusable card: image, name, price, rating via props
  navigation/
    types.ts                      TypeScript param lists for each navigator
    HomeStackNavigator.tsx        Stack: ProductList -> ProductDetails
    RootNavigator.tsx             Bottom tabs: Home, Cart, Profile
  screens/
    HomeScreen.tsx                Product grid (FlatList, numColumns=2)
    ProductDetailsScreen.tsx      Details + quantity selector + Add to Cart
    CartScreen.tsx                Cart items with quantity controls and total
    ProfileScreen.tsx             Simple static profile/menu screen
```

## How the requirements map to the code

- **Reusable product card** — `src/components/ProductCard.tsx` takes
  `image`, `name`, `price`, `rating`, and `onPress` as props; it's used on
  the Home screen and nowhere else hardcodes card markup.
- **Home screen / grid** — `HomeScreen.tsx` maps over `products` from
  `src/data/products.ts` in a two-column `FlatList`.
- **Bottom tabs** — `RootNavigator.tsx` sets up Home / Cart / Profile tabs
  with `@react-navigation/bottom-tabs`, including a live cart-count badge.
- **Stack navigation + route params** — `HomeStackNavigator.tsx` pushes
  `ProductDetailsScreen` from `HomeScreen`, passing the tapped product as
  `route.params.product`.
- **Quantity selector + Add to Cart** — `ProductDetailsScreen.tsx` holds
  `quantity` in `useState`, with +/- buttons, and calls `addItem` from
  `CartContext` on Add to Cart.
- **Cart persists across screens** — `CartContext.tsx` (React Context +
  `useReducer`) is provided once in `App.tsx`, so quantities you set on a
  product carry into the Cart tab and update live (including the tab badge).

## Notes / customizing

- Product photos are pulled from Unsplash URLs in `src/data/products.ts` so
  the app runs with zero local asset setup. Swap in your own exported Figma
  images by replacing the `image` field with `require("../../assets/yourfile.png")`
  and updating `ProductCard`'s `<Image source={...}>` accordingly.
- Colors/spacing live in one place, `src/theme.ts` — adjust `colors.primary`
  etc. to match the exact ShopEase palette if you pull swatches from Figma.
- The Checkout button on the Cart screen is a visual stub (no checkout flow
  per the assignment scope).
