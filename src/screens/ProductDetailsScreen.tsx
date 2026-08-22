import React, { useState } from "react";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { HomeStackParamList } from "../navigation/types";
import { colors, fontSize, radius, spacing } from "../theme";
import { useCart } from "../context/CartContext";

type Props = NativeStackScreenProps<HomeStackParamList, "ProductDetails">;

export default function ProductDetailsScreen({ route, navigation }: Props) {
  const { product } = route.params;
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  const increase = () => setQuantity((q) => q + 1);
  const decrease = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  const handleAddToCart = () => {
    addItem(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={product.image} style={styles.image} resizeMode="cover" /> 

        <View style={styles.body}>
          <View style={styles.titleRow}>
            <Text style={styles.category}>{product.category}</Text>
            <View style={styles.ratingRow}>
              <Ionicons name="star" size={14} color={colors.star} />
              <Text style={styles.ratingText}>{product.rating.toFixed(1)}</Text>
            </View>
          </View>

          <Text style={styles.name}>{product.name}</Text>
          <Text style={styles.price}>GH₵{product.price.toFixed(2)}</Text>

          <Text style={styles.sectionTitle}>Description</Text>
          <Text style={styles.description}>{product.description}</Text>

          <Text style={styles.sectionTitle}>Quantity</Text>
          <View style={styles.quantityRow}>
            <Pressable style={styles.quantityButton} onPress={decrease}>
              <Ionicons name="remove" size={18} color={colors.dark} />
            </Pressable>
            <Text style={styles.quantityValue}>{quantity}</Text>
            <Pressable style={styles.quantityButton} onPress={increase}>
              <Ionicons name="add" size={18} color={colors.dark} />
            </Pressable>
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <View>
          <Text style={styles.footerLabel}>Total</Text>
          <Text style={styles.footerPrice}>GH₵{(product.price * quantity).toFixed(2)}</Text>
        </View>
        <Pressable style={styles.addButton} onPress={handleAddToCart}>
          <Text style={styles.addButtonText}>{added ? "Added ✓" : "Add to Cart"}</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollContent: {
    paddingBottom: spacing.lg,
  },
  image: {
    width: "100%",
    height: 320,
    backgroundColor: colors.card,
  },
  body: {
    padding: spacing.md,
  },
  titleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  category: {
    fontSize: fontSize.xs,
    color: colors.gray,
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  ratingText: {
    fontSize: fontSize.sm,
    color: colors.gray,
    marginLeft: 4,
  },
  name: {
    fontSize: fontSize.xl,
    fontWeight: "700",
    color: colors.dark,
    marginTop: spacing.xs,
  },
  price: {
    fontSize: fontSize.lg,
    fontWeight: "700",
    color: colors.primary,
    marginTop: spacing.xs,
  },
  sectionTitle: {
    fontSize: fontSize.md,
    fontWeight: "600",
    color: colors.dark,
    marginTop: spacing.lg,
    marginBottom: spacing.xs,
  },
  description: {
    fontSize: fontSize.sm,
    color: colors.gray,
    lineHeight: 20,
  },
  quantityRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  quantityButton: {
    width: 36,
    height: 36,
    borderRadius: radius.sm,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.card,
  },
  quantityValue: {
    fontSize: fontSize.md,
    fontWeight: "600",
    color: colors.dark,
    marginHorizontal: spacing.md,
    minWidth: 24,
    textAlign: "center",
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: spacing.md,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    backgroundColor: colors.card,
  },
  footerLabel: {
    fontSize: fontSize.xs,
    color: colors.gray,
  },
  footerPrice: {
    fontSize: fontSize.lg,
    fontWeight: "700",
    color: colors.dark,
  },
  addButton: {
    backgroundColor: colors.primary,
    paddingVertical: spacing.sm + 4,
    paddingHorizontal: spacing.lg,
    borderRadius: radius.md,
  },
  addButtonText: {
    color: colors.white,
    fontSize: fontSize.md,
    fontWeight: "700",
  },
});
