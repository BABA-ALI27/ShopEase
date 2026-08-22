import React from "react";
import { FlatList, Image, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useCart } from "../context/CartContext";
import { colors, fontSize, radius, spacing } from "../theme";

export default function CartScreen() {
  const { items, increase, decrease, removeItem, totalPrice } = useCart();

  if (items.length === 0) {
    return (
      <SafeAreaView style={styles.emptyContainer} edges={["top"]}>
        <Ionicons name="cart-outline" size={56} color={colors.lightGray} />
        <Text style={styles.emptyText}>Your cart is empty</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <Text style={styles.title}>My Cart</Text>
      <FlatList
        data={items}
        keyExtractor={(item) => item.product.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Image source={item.product.image} style={styles.image} />
            <View style={styles.info}>
              <Text style={styles.name} numberOfLines={1}>
                {item.product.name}
              </Text>
              <Text style={styles.price}>GH₵{item.product.price.toFixed(2)}</Text>
              <View style={styles.quantityRow}>
                <Pressable
                  style={styles.quantityButton}
                  onPress={() => decrease(item.product.id)}
                >
                  <Ionicons name="remove" size={16} color={colors.dark} />
                </Pressable>
                <Text style={styles.quantityValue}>{item.quantity}</Text>
                <Pressable
                  style={styles.quantityButton}
                  onPress={() => increase(item.product.id)}
                >
                  <Ionicons name="add" size={16} color={colors.dark} />
                </Pressable>
              </View>
            </View>
            <Pressable onPress={() => removeItem(item.product.id)} hitSlop={8}>
              <Ionicons name="trash-outline" size={20} color={colors.danger} />
            </Pressable>
          </View>
        )}
      />
      <View style={styles.footer}>
        <Text style={styles.footerLabel}>Total</Text>
        <Text style={styles.footerPrice}>GH₵{totalPrice.toFixed(2)}</Text>
      </View>
      <Pressable style={styles.checkoutButton}>
        <Text style={styles.checkoutText}>Checkout</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: spacing.md,
  },
  title: {
    fontSize: fontSize.xxl,
    fontWeight: "700",
    color: colors.dark,
    paddingHorizontal: spacing.md,
    marginBottom: spacing.sm,
  },
  list: {
    paddingHorizontal: spacing.md,
    paddingBottom: spacing.md,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.card,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.sm,
    marginBottom: spacing.sm,
  },
  image: {
    width: 64,
    height: 64,
    borderRadius: radius.sm,
    backgroundColor: colors.background,
  },
  info: {
    flex: 1,
    marginLeft: spacing.sm,
  },
  name: {
    fontSize: fontSize.sm,
    fontWeight: "600",
    color: colors.dark,
  },
  price: {
    fontSize: fontSize.sm,
    color: colors.primary,
    fontWeight: "700",
    marginTop: 2,
  },
  quantityRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: spacing.xs,
  },
  quantityButton: {
    width: 26,
    height: 26,
    borderRadius: radius.sm,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: "center",
    justifyContent: "center",
  },
  quantityValue: {
    fontSize: fontSize.sm,
    fontWeight: "600",
    color: colors.dark,
    marginHorizontal: spacing.sm,
    minWidth: 16,
    textAlign: "center",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  footerLabel: {
    fontSize: fontSize.md,
    color: colors.gray,
  },
  footerPrice: {
    fontSize: fontSize.lg,
    fontWeight: "700",
    color: colors.dark,
  },
  checkoutButton: {
    backgroundColor: colors.primary,
    marginHorizontal: spacing.md,
    marginBottom: spacing.md,
    paddingVertical: spacing.sm + 4,
    borderRadius: radius.md,
    alignItems: "center",
  },
  checkoutText: {
    color: colors.white,
    fontSize: fontSize.md,
    fontWeight: "700",
  },
  emptyContainer: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "center",
  },
  emptyText: {
    fontSize: fontSize.md,
    color: colors.lightGray,
    marginTop: spacing.sm,
  },
});