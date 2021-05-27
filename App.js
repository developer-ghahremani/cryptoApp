import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
// import LoadingModal from "./src/components/Modal/Loading";
import MainState from "./src/context/main/MainState";
import Crypto from "./src/Crypto";

const App = () => {
  const [loaded] = useFonts({
    nunitoLight: require("./assets/fonts/nunito/Nunito-Light.ttf"),
    nunito: require("./assets/fonts/nunito/Nunito-Regular.ttf"),
    nunitoBold: require("./assets/fonts/nunito/Nunito-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <MainState>
      <NavigationContainer>
        <Crypto />
        {/* <LoadingModal /> */}
      </NavigationContainer>
    </MainState>
  );
};

export default App;

const styles = StyleSheet.create({});
