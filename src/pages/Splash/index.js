import { useNavigation } from "@react-navigation/core";
import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import { pageName } from "../../../constant";
import Container from "../../components/Container";
import IText from "../../components/IText";
import MainLayout from "../../layout/main";

const Splash = () => {
  const { navigate } = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigate(pageName.home.index);
    }, 4000);
  }, []);

  return (
    <MainLayout>
      <Container style={styles.container}>
        <IText size={30}>Splash Screen</IText>
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
