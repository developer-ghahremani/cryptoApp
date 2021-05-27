import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MainLayout from "../../layout/main";
import { createDrawerNavigator } from "@react-navigation/drawer";
import homeRoutes from "./router";
import { pageName } from "../../../constant";

const HomeStack = () => {
  const Stack = createDrawerNavigator();
  return (
    <Stack.Navigator>
      {homeRoutes.map((route) => (
        <Stack.Screen key={route.name} {...route} />
      ))}
    </Stack.Navigator>
  );
};

export default HomeStack;

const styles = StyleSheet.create({});
