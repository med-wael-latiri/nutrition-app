import React from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
const MealDetail = ({ route }) => {
  const meal = route.params?.meal;
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ flex: 1 }}>
        <Image
          resizeMode="cover"
          style={{ height: "100%", width: "100%" }}
          source={{ uri: meal.image }}
        ></Image>
      </View>
      <ScrollView style={{ flex: 1, marginVertical: 10, marginHorizontal: 20 }}>
        <Text style={styles.title}>{meal.title}</Text>
        <Text>{meal.description}</Text>
        <Text style={styles.subTitle}>Breakfast:</Text>
        <Text style={styles.text}>{meal.breakfast}</Text>
        <Text style={styles.subTitle}>Lunch:</Text>
        <Text style={styles.text}>{meal.lunch}</Text>
        <Text style={styles.subTitle}>Dinner:</Text>
        <Text style={styles.text}>{meal.dinner}</Text>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    // fontFamily:'Inter',
    fontWeight: "bold",
    color: "#8a3ffc",
  },
  subTitle: {
    fontSize: 14,
    // fontFamily:'Inter',
    fontWeight: "bold",
    color: "#8a3ffc",
  },
  text: {
    fontSize: 12,
    // fontFamily:'Inter',
    fontWeight: "bold",
    color: "black",
  },
});

export default MealDetail;
