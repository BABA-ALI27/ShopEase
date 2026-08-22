import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { colors, fontSize, radius, spacing } from "../theme";

const MENU_ITEMS = [
  { icon: "person-outline", label: "My Details" },
  { icon: "location-outline", label: "Address" },
  { icon: "card-outline", label: "Payment Methods" },
  { icon: "notifications-outline", label: "Notifications" },
  { icon: "help-circle-outline", label: "Help Center" },
  { icon: "log-out-outline", label: "Log Out" },
] as const;

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <Text style={styles.title}>Profile</Text>

      <View style={styles.profileCard}>
        <View style={styles.avatar}>
          <Ionicons name="person" size={28} color={colors.white} />
        </View>
        <View>
          <Text style={styles.name}>Derrick Pemboni</Text>
          <Text style={styles.email}>derrickpemboni2@gmail.com</Text>
        </View>
      </View>

      <View style={styles.menu}>
        {MENU_ITEMS.map((item) => (
          <View style={styles.menuItem} key={item.label}>
            <Ionicons name={item.icon} size={20} color={colors.dark} />
            <Text style={styles.menuLabel}>{item.label}</Text>
            <Ionicons name="chevron-forward" size={18} color={colors.lightGray} />
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: spacing.md,
    paddingHorizontal: spacing.md,
  },
  title: {
    fontSize: fontSize.xxl,
    fontWeight: "700",
    color: colors.dark,
    marginBottom: spacing.md,
  },
  profileCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.card,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.md,
    marginBottom: spacing.lg,
  },
  avatar: {
    width: 52,
    height: 52,
    borderRadius: radius.full,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    marginRight: spacing.md,
  },
  name: {
    fontSize: fontSize.md,
    fontWeight: "700",
    color: colors.dark,
  },
  email: {
    fontSize: fontSize.sm,
    color: colors.gray,
    marginTop: 2,
  },
  menu: {
    backgroundColor: colors.card,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    overflow: "hidden",
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    gap: spacing.sm,
  },
  menuLabel: {
    flex: 1,
    fontSize: fontSize.sm,
    color: colors.dark,
    marginLeft: spacing.xs,
  },
});