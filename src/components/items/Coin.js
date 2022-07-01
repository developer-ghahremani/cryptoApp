import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ILineChart from "../Chart/ILine";
import IDivider from "../IDivider";
import IImage from "../IImage";
import INumberFormat from "../INumberFormat";
import IText from "../IText";
import Row from "../Row";

const CoinItem = ({ coin }) => {
  console.log(Object.keys(coin));
  const {
    uuid,
    symbol,
    name,
    color,
    iconUrl,
    marketCap,
    price,
    listedAt,
    tier,
    change,
    rank,
    sparkline,
    lowVolume,
    coinrankingUrl,
    // 24hVolume,
    btcPrice,
  } = coin;
  return (
    <View style={{ marginHorizontal: 5 }}>
      <Row justify="space-between" align="center">
        <Row align="center">
          <IImage
            resizeMode="contain"
            source={{ uri: iconUrl.replace(".svg", ".png") }}
            style={styles.iconImage}
          />
          <View style={{ marginHorizontal: 10 }}>
            <IText>{symbol}</IText>

            <IText>{coin["24hVolume"]}</IText>

            <IText>{symbol}</IText>

            <Row>
              <IText>{rank}</IText>
              <IText>.</IText>
              <IText>{name}</IText>
            </Row>
          </View>
        </Row>

        {/* <ILineChart /> */}

        <View style={{ alignItems: "center" }}>
          <INumberFormat thousandSeparator bold size={15}>
            {price}
          </INumberFormat>
          <INumberFormat
            style={{ color: parseInt(change) < 0 ? "red" : "green" }}>
            {change}
          </INumberFormat>
        </View>
      </Row>
      <IDivider mB={5} />
    </View>
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
