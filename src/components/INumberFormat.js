import React from "react";
import { StyleSheet, Text, View } from "react-native";
import NumberFormat from "react-number-format";
import IText from "./IText";

const INumberFormat = ({ children, style, bold, size, ...prp }) => {
  return (
    <NumberFormat
      displayType="text"
      value={children}
      renderText={(formated) => (
        <IText style={style} bold={bold} size={size}>
          {formated.split(".").map((item, index) => {
            let temp = "";
            if (index === 0) temp = item + ".";
            else temp += item.substr(0, 2);
            return temp;
          })}
        </IText>
      )}
      {...prp}
    />
  );
};

export default INumberFormat;

const styles = StyleSheet.create({});
