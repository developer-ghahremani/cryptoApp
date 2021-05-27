import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import router from "./router";
import { pageName } from "../constant";

const Crypto = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName={pageName.splash} headerMode="none">
      {router.map((route) => (
        <Stack.Screen key={route.name} {...route} />
      ))}
    </Stack.Navigator>
  );
};

export default Crypto;

const styles = StyleSheet.create({});
