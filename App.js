import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "./screens/welcome";
import Login from "./screens/login";
import Signup from "./screens/register";
import BmiRegister from "./screens/bmiRegister";
import BmiResult from "./screens/bmiResult";
import NutritionPlan from "./screens/nutritionPlan";
import FoodPlans from "./screens/foodPlans";
import MealDetail from "./screens/MealDetail";
import { app } from "./firebaseConfig"; // Import the initialized Firebase app object
import { getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp"
          component={Signup}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BmiRegister"
          component={BmiRegister}
          options={{ title: "", headerShadowVisible: false }}
        />
        <Stack.Screen
          name="BmiResult"
          component={BmiResult}
          options={{ title: "", headerShadowVisible: false }}
        />
        <Stack.Screen
          name="plan"
          component={NutritionPlan}
          options={{ title: "", headerShadowVisible: false }}
        />
        <Stack.Screen
          name="foodplans"
          component={FoodPlans}
          options={{ title: "", headerShadowVisible: false }}
        />
        <Stack.Screen
          name="mealDetail"
          component={MealDetail}
          options={{ title: "", headerShadowVisible: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
