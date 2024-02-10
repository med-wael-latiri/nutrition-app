import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  Pressable,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import Button from "../components/Button";

const BmiRegister = ({ navigation }) => {
  const [name, setName] = useState("");

  const [weight, setWeight] = useState("");

  const [age, setage] = useState("");

  const [height, setheight] = useState("");

  const [gender, setGender] = useState("Male")

  const [selectedChoice, setSelectedChoice] = useState(null);

  const [selectedButton, setSelectedButton] = useState(null);
  const handleButtonPress = (choice) => {
    setSelectedButton(choice);
    setSelectedChoice(choice);
  }
  const [isValid, setIsValid] = useState(false)

  const validateData = () => {
    const validWeight = parseFloat(weight) > 0;
    const validAge = parseInt(age, 10) > 0;
    const validHeight = parseFloat(height) > 0;
    const validName = name.trim().length > 0;
    setIsValid(!(validName && validWeight && validAge && validHeight));
  };

  const save = ()=>{
    const data = {
      name: name,
      age: age,
      weight: weight,
      height: height,
      selectedChoice: selectedChoice,
      gender: gender
    }

    navigation.navigate('BmiResult', {data} )
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={styles.container}>
        <Text style={styles.label}>Name</Text>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Name"
            placeholderTextColor="black"
            value={name}
            onChangeText={(text) => {
              setName(text);
            }}
            keyboardType="default"
            style={styles.input}
          />
        </View>

        <Text style={styles.label}>Weight</Text>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Weight"
            placeholderTextColor="black"
            value={weight}
            onChangeText={(text) => {
              setWeight(text);
              validateData();
            }}
            keyboardType="decimal-pad"
            style={styles.input}
          />
        </View>
        <Text style={styles.label}>Age</Text>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Age"
            placeholderTextColor="black"
            value={age}
            onChangeText={(text) => {
              setage(text);
              validateData();
            }}
            keyboardType="decimal-pad"
            style={styles.input}
          />
        </View>
        <Text style={styles.label}>height</Text>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="height"
            placeholderTextColor="black"
            value={height}
            onChangeText={(text) => {
              setheight(text);
              validateData();
            }}
            keyboardType="decimal-pad"
            style={styles.input}
          />
        </View>
      </View>
      <View style={{ ...styles.container, ...styles.buttonsContainer }}>
        <TouchableOpacity
          style={[
            styles.button,
            selectedButton === "Naturally Skinny" && styles.selectedButton,
          ]}
          onPress={() => handleButtonPress("Naturally Skinny")}
        >
          <Text
            style={
              selectedButton === "Naturally Skinny"
                ? styles.selectedButtonText
                : styles.buttonText
            }
          >
            Naturally skinny
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.button,
            selectedButton === "Naturallyly Musclar" && styles.selectedButton,
          ]}
          onPress={() => handleButtonPress("Naturallyly Musclar")}
        >
          <Text
            style={
              selectedButton === "Naturallyly Musclar"
                ? styles.selectedButtonText
                : styles.buttonText
            }
          >
            Naturally Musclar
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.button,
            selectedButton === "Naturally higher body fat" && styles.selectedButton,
          ]}
          onPress={() => handleButtonPress("Naturally higher body fat")}
        >
          <Text
            style={
              selectedButton === "Naturally higher body fat"
                ? styles.selectedButtonText
                : styles.buttonText
            }
          >
            Naturally higher body fat
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footerContainer}>
        <Button
          // onPress={() => {
          //   navigation.navigate("BmiResult");
          // }}
          onPress={save}
          title="save "
          filled
          style={{
            marginTop: 24,
            marginBottom: 4,
            width: "100%",
          }}
          isDisabled={isValid}
        />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    marginHorizontal: 30,
    backgroundColor: "white",
    borderRadius: 5,
    marginBottom: 20,
    paddingVertical: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: "500",
    color: "#606060",
    // fontFamily: "Inter",
    marginTop: 10,
  },
  input: {
    fontSize: 15,
    fontWeight: "400",
    color: "#606060",
    // fontFamily: "Inter",
  },
  inputContainer: {
    width: "100%",
    height: 50,
    borderBottomWidth: 1,
  },

  footerContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 10,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  buttonsContainer: {
    gap: 4,
  },
  button: {
    backgroundColor: "white",
    borderColor: "#8a3ffc",
    borderWidth: 1,
    padding: 10,
    borderRadius: 15,
  },
  selectedButton: {
    backgroundColor: "#8a3ffc",
  },
  selectedButtonText: {
    color: "#fff",
    textAlign: "center",
  },
  buttonText: {
    color: "#8a3ffc",
    textAlign: "center",
  },
});
export default BmiRegister;
