import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Row = ({ children, justify, align, mX, mY }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: justify,
        alignItems: align,
        marginHorizontal: mX,
        marginVertical: mY,
      }}>
      {children}
    </View>
  );
};

export default Row;

const styles = StyleSheet.create({});
