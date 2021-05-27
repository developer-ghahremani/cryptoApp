import React from "react";
import { StyleSheet, Text, View } from "react-native";
import IAnim from "./IAnim";

const ILoading = () => {
  return (
    <IAnim
      anim={require("./../../assets/animations/loading.json")}
      size={200}
    />
  );
};

export default ILoading;

const styles = StyleSheet.create({});
