import React from "react";
import { StyleSheet, Text, View } from "react-native";
import LottieView from "lottie-react-native";

const IAnim = ({ anim, size = 200 }) => {
  return (
    <LottieView
      // autoPlay
      style={{
        width: size,
        height: size,
        backgroundColor: "#eee",
      }}
      source={require("./../../assets/animations/loading.json")}
      // OR find more Lottie files @ https://lottiefiles.com/featured
      // Just click the one you like, place that file in the 'assets' folder to the left, and replace the above 'require' statement
    />
  );
};

export default IAnim;

const styles = StyleSheet.create({});
