import React from "react";
import { StyleSheet, Text, View, Modal } from "react-native";
import Container from "./Container";

const FullScreenModal = ({ children, ...prp }) => {
  return (
    <Modal {...prp}>
      <Container style={styles.container}>{children}</Container>
    </Modal>
  );
};

export default FullScreenModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
