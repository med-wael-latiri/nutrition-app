import React, { useState, useEffect } from "react";
import { StyleSheet, ScrollView, Text, View, TextInput } from "react-native";
import PieChart from "react-native-pie-chart";
import Button from "../components/Button";

const NutritionPlan = ({ navigation, route }) => {
  const calories = route.params?.calories ?? 0;
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [totalCalories, setTotalCalories] = useState(0);
  const [series, setSeries] = useState([calories, totalCalories]);
  const [food, setFood] = useState("");
  console.log(series);
  const widthAndHeight = 250;
  const sliceColor = ["#fbd203", "#8a3ffc"];

  const updateCalories = () => {
    setTotalCalories(totalCalories + Number(food));
    // setSeries([calories, totalCalories]);
    setFood(""); // Reset the food input
  };

  useEffect(() => {
    setSeries([calories, totalCalories]);
  }, [totalCalories]);

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={styles.container}>
        <Text style={styles.title}>Your nutrition plan</Text>
        <Text style={styles.title}>{calories - totalCalories}</Text>
        <PieChart
          widthAndHeight={widthAndHeight}
          series={series}
          sliceColor={sliceColor}
          coverRadius={0.45}
          coverFill={"#FFF"}
        />
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="calories to add"
            placeholderTextColor="black"
            value={food}
            onChangeText={setFood}
            keyboardType="numeric"
            style={styles.input}
          />
          <Button
            title="+"
            onPress={updateCalories}
            filled
            style={styles.buttonStyle}
          />
        </View>
        <Button
          title="Proposed Plans"
          onPress={() => navigation.navigate("foodplans")}
          filled
          style={styles.buttonStyle}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  input: {
    height: 50,
    borderBottomWidth: 1,
    marginRight: 12,
    flex: 1,
    fontSize: 15,
    fontWeight: "400",
  },
  buttonStyle: {
    marginTop: 24,
    marginBottom: 4,
  },
});

export default NutritionPlan;
