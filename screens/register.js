import {
  View,
  Text,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ToastAndroid,
} from "react-native";
import React, { useState } from "react";

import Button from "../components/Button";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
const Signup = ({ navigation }) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isConfirmPasswordShown, setisConfirmPasswordShown] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidPassword = (password) => {
    return password.length >= 8;
  };

  const isValidConfirmPassword = (confirmPassword) => {
    return confirmPassword == password;
  };
  const isValidText = (text) => {
    return text.length >= 3;
  };
  const resetForm = () => {
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setFirstName("");
    setLastName("");
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        ToastAndroid.show(
          "User account created & signed in!",
          ToastAndroid.SHORT
        );
        navigation.navigate("BmiRegister");
      })
      .catch((err) => {
        ToastAndroid.show(
          "pleaase check your credentials!",
          ToastAndroid.SHORT
        );
        console.log(err);
      });
  };

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "white", marginBottom: 10 }}
    >
      <View style={styles.loginContainer}>
        <Pressable onPress={() => navigation.navigate("Login")}>
          <Text style={styles.subText}>Log In</Text>
        </Pressable>
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Sign Up</Text>
      </View>

      <ScrollView style={{ marginBottom: 10, flex: 1 }}>
        <View style={{ flex: 1 }}>
          <View style={styles.container}>
            <View>
              <Text style={styles.label}>Email *</Text>

              <View style={styles.inputContainer}>
                <TextInput
                  placeholder="Enter your email address"
                  placeholderTextColor="#8a3ffc"
                  value={email}
                  onChangeText={(text) => {
                    setEmail(text);
                  }}
                  keyboardType="email-address"
                  style={styles.input}
                />
              </View>
            </View>
          </View>

          <View style={styles.container}>
            <Text style={styles.label}>Password *</Text>

            <View style={styles.inputContainer}>
              <TextInput
                placeholder="Enter your password"
                placeholderTextColor="black"
                value={password}
                onChangeText={(text) => {
                  setPassword(text);
                }}
                secureTextEntry={isPasswordShown}
                style={styles.input}
              />

              <TouchableOpacity
                onPress={() => setIsPasswordShown(!isPasswordShown)}
                style={{
                  position: "absolute",
                  right: 12,
                }}
              >
                {isPasswordShown == true ? (
                  <FontAwesome name="eye-slash" size={24} color="black" />
                ) : (
                  <FontAwesome name="eye" size={24} color="black" />
                )}
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.container}>
            <Text style={styles.label}>confirm Password *</Text>

            <View style={styles.inputContainer}>
              <TextInput
                placeholder="Enter your password"
                placeholderTextColor="black"
                value={confirmPassword}
                onChangeText={(text) => {
                  setConfirmPassword(text);
                }}
                secureTextEntry={isConfirmPasswordShown}
                style={styles.input}
              />

              <TouchableOpacity
                onPress={() =>
                  setisConfirmPasswordShown(!isConfirmPasswordShown)
                }
                style={{
                  position: "absolute",
                  right: 12,
                }}
              >
                {isConfirmPasswordShown == true ? (
                  <FontAwesome name="eye-slash" size={24} color="black" />
                ) : (
                  <FontAwesome name="eye" size={24} color="black" />
                )}
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View
          style={{
            backgroundColor: "transparent",
          }}
        >
          <View style={{ ...styles.container }}>
            <Button
              filled
              title="Sign Up"
              onPress={handleSignUp}
              style={{
                width: "100%",
                marginTop: 10,
              }}
              isDisabled={
                !isValidEmail(email) ||
                !isValidConfirmPassword(confirmPassword) ||
                !isValidPassword(password)
              }
              //   isLoading={isLoading}
            />
          </View>

          <View style={styles.footerContainer}>
            <Text style={styles.subText}>
              By signing up you agree to our Term of Use and Privacy Policy
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    paddingHorizontal: 22,
    marginHorizontal: 15,
  },
  loginContainer: {
    alignItems: "flex-end",
    paddingHorizontal: 22,
    marginHorizontal: 22,
    marginVertical: 22,
  },

  text: {
    marginTop: 10,
    fontSize: 24,
    fontWeight: "bold",
    color: "#8a3ffc",
    // fontFamily: 'Inter'
  },
  subText: {
    marginTop: 20,
    fontSize: 14,
    lineHeight: 14,
    fontWeight: "600",
    color: "#8a3ffc",
    // fontFamily: 'Inter',
    textAlign: "center",
  },
  title: {
    marginTop: 20,
    fontSize: 24,
    fontWeight: "700",
    color: "#000000",
    // fontFamily: 'Inter',
    textAlign: "left",
  },
  image: {
    width: 310,
    height: 295,
    borderRadius: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: "500",
    color: "#606060",
    // fontFamily: 'Inter',
  },
  input: {
    fontSize: 15,
    fontWeight: "400",
    color: "#606060",
    // fontFamily: 'Inter',
  },
  inputContainer: {
    width: "100%",
    height: 38,
    borderBottomWidth: 1,
  },
  footerContainer: {
    paddingBottom: 20,
    paddingHorizontal: 22,
    marginHorizontal: 15,
  },
});

export default Signup;
