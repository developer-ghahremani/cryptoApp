import React from "react";
import { StyleSheet } from "react-native";
import Container from "../../components/Container";
import IText from "../../components/IText";
import MainLayout from "../../layout/main";

const Splash = () => {
  return (
    <MainLayout>
      <Container style={styles.container}>
        <IText>salam</IText>
      </Container>
    </MainLayout>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
