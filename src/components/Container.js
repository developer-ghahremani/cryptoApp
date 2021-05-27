import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Container = ({ children, ...prp }) => {
  return <View {...prp}>{children}</View>;
};

export default Container;

const styles = StyleSheet.create({});
