import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../styles/color";

const IDivider = ({ mY, mB }) => {
  return (
    <View
      style={{
        height: 1,
        backgroundColor: colors.grayLightest,
        marginVertical: mY,
        marginBottom: mB,
      }}
    />
  );
};

export default IDivider;

const styles = StyleSheet.create({});
