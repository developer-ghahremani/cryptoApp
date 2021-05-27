import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

const IFlatList = ({ ...prp }) => {
  return <FlatList keyExtractor={(item, index) => `${index}`} {...prp} />;
};

export default IFlatList;

const styles = StyleSheet.create({});
