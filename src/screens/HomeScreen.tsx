import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";
import { HomeStackParamList } from "../navigation/types";
import { colors, fontSize, spacing } from "../theme";

type Props = NativeStackScreenProps<HomeStackParamList, "ProductList">;

export default function HomeScreen({ navigation }: Props) {
  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <View style={styles.header}>
        <Text style={styles.title}>ShopEase</Text>
        <Text style={styles.subtitle}>Discover products you'll love</Text>
      </View>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <ProductCard
            image={item.image}
            name={item.name}
            price={item.price}
            rating={item.rating}
            onPress={() => navigation.navigate("ProductDetails", { product: item })}
          />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    paddingHorizontal: spacing.md,
    paddingTop: spacing.md,
    paddingBottom: spacing.sm,
  },
  title: {
    fontSize: fontSize.xxl,
    fontWeight: "700",
    color: colors.dark,
  },
  subtitle: {
    fontSize: fontSize.sm,
    color: colors.gray,
    marginTop: 2,
  },
  list: {
    paddingHorizontal: spacing.md,
    paddingBottom: spacing.lg,
  },
  row: {
    gap: spacing.md,
    marginBottom: spacing.md,
  },
});