import { range } from "lodash";
import React, { useContext } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import IFlatList from "../../../components/IFlatList";
import CoinItem from "../../../components/items/Coin";
import { HomeContext } from "./context";

const CoinList = () => {
  const { state } = useContext(HomeContext);

  return (
    <IFlatList
      data={state.coins}
      renderItem={({ item }) => <CoinItem coin={item} />}
    />
  );
};

export default CoinList;

const styles = StyleSheet.create({});
