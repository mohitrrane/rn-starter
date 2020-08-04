import React from "react";
import { Text, StyleSheet } from "react-native";

const ComponentsScreen = () => {
	var myname = 'Mohit Rane'
  return (
    <>
      <Text style={styles.titleStyle}>Getting Started with React Native!</Text>
      <Text style={styles.nameStyle}>My name is {myname}.</Text>
    </>
  )
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 45
  },
  nameStyle: {
    fontSize: 20
  }
});

export default ComponentsScreen;
