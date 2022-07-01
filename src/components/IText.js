import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../styles/color";

const IText = ({
  children,
  bold,
  size = 14,
  color = colors.grayDark,
  style,
}) => {
  return (
    <Text
      style={{
        fontFamily: bold ? "nunitoBold" : "nunito",
        fontSize: size,
        color,
        ...style,
      }}>
      {children}
    </Text>
  );
};

export default IText;

const styles = StyleSheet.create({});
