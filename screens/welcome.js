import {
  View,
  Text,
  Pressable,
  Image,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import React from "react";

import Button from "../components/Button";

const Welcome = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        source={require("../assets/images/wel.png")}
        style={{ flex: 1 }}
      >
        {/* <View style={styles.container}>
          <Text style={styles.text}>Welcome</Text>
          <Text style={styles.subText}>Chose your Profile Type and certainly we will help you find what you were Looking for</Text>
        </View> */}

        <View
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: "transparent",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <View style={styles.container}>
            <Button
              title="Already Have An Account"
              onPress={() => navigation.navigate("Login")}
              style={{
                marginTop: 10,
                width: "100%",
              }}
            />
            <Button
              title="New to our App"
              filled
              onPress={() => navigation.navigate("SignUp")}
              style={{
                marginTop: 10,
                width: "100%",
              }}
            />
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingVertical: 22,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 22,
    marginHorizontal: 22,
  },
  text: {
    marginTop: 20,
    fontSize: 40,
    fontWeight: "bold",
    color: "#8a3ffc",
    // fontFamily: 'Inter'
  },
  subText: {
    marginTop: 14,
    fontSize: 14,
    lineHeight: 14,
    fontWeight: "400",
    color: "#8a3ffc",
    // fontFamily: 'Inter',
    textAlign: "center",
  },
  image: {
    width: 310,
    height: 295,
    borderRadius: 20,
  },
});

export default Welcome;
