import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
  return (
    <View>
      <Text style={styles.textStyle}>
        HomeScreen
      </Text>
      
      <View style={styles.buttonCustomStyle}>
        <Button
          title="Go to Components Demo"
          onPress={()=>{
            props.navigation.navigate('Components')
          }}
        />
      </View>
      
      <View style={styles.buttonCustomStyle}>
        <Button
          title="Go to List Demo"
          onPress={()=>{
            props.navigation.navigate('List')
          }}
        />
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    alignSelf: "center",
    padding: 5,
    fontWeight: 'bold'
  },
  buttonCustomStyle: {
    paddingHorizontal: 20, 
    paddingVertical: 10
  }
});

export default HomeScreen;
