import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { MainContext } from "./context";

const MainState = ({ children }) => {
  const [mainState, setMainState] = useState({});
  return (
    <MainContext.Provider value={{ mainState, setMainState }}>
      {children}
    </MainContext.Provider>
  );
};

export default MainState;

const styles = StyleSheet.create({});
