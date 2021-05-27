import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Row from "../../../components/Row";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
const NavBar = () => {
  return (
    <Row justify="space-between" mX={8} mY={7}>
      <Feather name="menu" size={24} color="black" />
      <Ionicons name="notifications-outline" size={24} color="black" />
    </Row>
  );
};

export default NavBar;

const styles = StyleSheet.create({});
