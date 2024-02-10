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
  ToastAndroid,
} from "react-native";
import React, { useState } from "react";
import { auth } from "../firebaseConfig";
//   import Icon from 'react-native-vector-icons/FontAwesome';
// import auth from "@react-native-firebase/auth";
import Button from "../components/Button";
import { signInWithEmailAndPassword } from "firebase/auth";
const Login = ({ navigation }) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState(true);
  const [passwordError, setPasswordError] = useState(true);

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidPassword = (password) => {
    return password.length >= 8;
  };
  const handleEmailChange = (text) => {
    setEmail(text);
  };
  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
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
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={styles.signUpContainer}>
        <Pressable
          onPress={() => {
            navigation.navigate("SignUp");
          }}
        >
          <Text style={styles.subText}>Sign Up</Text>
        </Pressable>
      </View>

      <View style={styles.container}>
        <Text style={styles.title}>Log In</Text>
      </View>

      <View style={styles.container}>
        <Text style={styles.label}>Your Email</Text>

        <View
          style={{
            ...styles.inputContainer,
          }}
        >
          <TextInput
            placeholder="Enter your email address"
            placeholderTextColor={"black"}
            keyboardType="email-address"
            value={email}
            onChangeText={handleEmailChange}
            style={{
              color: emailError ? "black" : "red",
              fontSize: 15,
              fontWeight: "400",
              // fontFamily: "Inter",
            }}
          />
        </View>
      </View>

      <View style={styles.container}>
        <Text style={styles.label}>Password</Text>

        <View
          style={{
            ...styles.inputContainer,
            borderColor: passwordError ? "black" : "red",
          }}
        >
          <TextInput
            placeholder="Enter your password"
            placeholderTextColor={"black"}
            value={password}
            onChangeText={handlePasswordChange}
            secureTextEntry={isPasswordShown}
            style={{
              width: "100%",
            }}
          />

          <TouchableOpacity
            onPress={() => setIsPasswordShown(!isPasswordShown)}
            style={{
              position: "absolute",
              right: 12,
              top: 15,
            }}
          >
            {/* {isPasswordShown == true ? (
                  <Icon name="eye-slash" size={24} color={'black'} />
                ) : (
                  <Icon name="eye" size={24} color={'black'} />
                )} */}
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.container}>
        <Button
          title="Log In"
          filled
          style={{
            marginTop: 24,
            marginBottom: 4,
          }}
          onPress={handleLogin}
          isDisabled={!isValidEmail(email) || !isValidPassword(password)}
        />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    paddingHorizontal: 22,
    marginHorizontal: 15,
  },
  signUpContainer: {
    alignItems: "flex-end",
    paddingHorizontal: 22,
    marginHorizontal: 22,
    marginVertical: 22,
  },

  text: {
    marginTop: 10,
    fontSize: 24,
    fontWeight: "bold",
    color: "#272727",
    // fontFamily: "Inter",
  },
  subText: {
    marginTop: 20,
    fontSize: 14,
    lineHeight: 14,
    fontWeight: "600",
    color: "#000000",
    // fontFamily: "Inter",
    textAlign: "center",
  },
  title: {
    marginTop: 20,
    fontSize: 24,
    fontWeight: "700",
    color: "#000000",
    // fontFamily: "Inter",
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
    // fontFamily: "Inter",
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
    paddingBottom: 20,
    paddingHorizontal: 22,
    marginHorizontal: 15,
  },
});

export default Login;
