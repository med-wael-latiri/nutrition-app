import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";

const MealCard = ({ meal, handlePress }) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      style={{
        flex: 1,
      }}
    >
      <View style={styles.containerBox}>
        <Image
          resizeMode="cover"
          style={{ height: 80, width: 80, borderRadius: 15 }}
          source={{ uri: meal.image }}
        ></Image>

        <View style={styles.container}>
          <View style={styles.cardHeader}>
            <Text style={styles.mealName}>{meal.title}</Text>
            {/* <Ionicons name='information-circle-outline' size={18} color='black' /> */}
          </View>

          <View style={styles.cardInfo}>
            <Text style={styles.mealText}>{meal.description}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  containerBox: {
    flex: 1,
    backgroundColor: "transparent",
    borderColor: "#E4E4E4",
    borderBottomWidth: 1,
    flexDirection: "row",
    marginBottom: 22,
    padding: 10,
    gap: 20,
  },

  container: {
    flex: 1,
    justifyContent: "center",
    gap: 10,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  mealName: {
    color: "#8a3ffc",
    // fontFamily: 'Inter',
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "600",
  },
  mealText: {
    // fontFamily: "Inter",
    fontSize: 12,
    fontWeight: "600",
    color: "#555555",
  },
  cardInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default MealCard;
