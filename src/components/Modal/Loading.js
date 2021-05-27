import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Container from "../Container";
import FullScreenModal from "../FullScreenModal";
import ILoading from "../ILoading";

const LoadingModal = () => {
  return (
    <FullScreenModal visible>
      <ILoading />
    </FullScreenModal>
  );
};

export default LoadingModal;

const styles = StyleSheet.create({});
