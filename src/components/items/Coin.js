import React from "react";
import { StyleSheet, Text, View } from "react-native";
import IImage from "../IImage";
import IText from "../IText";
import Row from "../Row";

const CoinItem = ({ coin }) => {
  return (
    <Row justify="space-between" align="center">
      <Row>
        <IImage source={{ uri: coin.iconUrl }} style={styles.iconImage} />
        <IText>{coin.name}</IText>
      </Row>
    </Row>
  );
};

export default CoinItem;

const styles = StyleSheet.create({
  iconImage: {
    width: 40,
    height: 40,
    borderRadius: 10,
  },
});
