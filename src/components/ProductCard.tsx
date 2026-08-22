import React from "react";
import { Image, ImageSourcePropType, Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors, fontSize, radius, spacing } from "../theme";

type ProductCardProps = {
  image: ImageSourcePropType;
  name: string;
  price: number;
  rating: number;
  onPress?: () => void;
};

export default function ProductCard({ image, name, price, rating, onPress }: ProductCardProps) {
  return (
    <Pressable style={styles.card} onPress={onPress}>
      <Image source={image} style={styles.image} resizeMode="cover" />
      <View style={styles.info}>
        <Text style={styles.name} numberOfLines={1}>
          {name}
        </Text>
        <View style={styles.ratingRow}>
          <Ionicons name="star" size={13} color={colors.star} />
          <Text style={styles.ratingText}>{rating.toFixed(1)}</Text>
        </View>
        <Text style={styles.price}>GH₵{price.toFixed(2)}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.card,
    borderRadius: radius.md,
    overflow: "hidden",
    flex: 1,
    borderWidth: 1,
    borderColor: colors.border,
  },
  image: {
    width: "100%",
    height: 130,
    backgroundColor: colors.background,
  },
  info: {
    padding: spacing.sm,
  },
  name: {
    fontSize: fontSize.sm,
    fontWeight: "600",
    color: colors.dark,
    marginBottom: 4,
  },
  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  ratingText: {
    fontSize: fontSize.xs,
    color: colors.gray,
    marginLeft: 4,
  },
  price: {
    fontSize: fontSize.md,
    fontWeight: "700",
    color: colors.primary,
  },
});
