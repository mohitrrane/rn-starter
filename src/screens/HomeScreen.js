import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = () => {
  return (
    <View>
      <Text style={styles.textStyle}>
        HomeScreen
      </Text>
      
      <View style={{paddingHorizontal: 20, paddingVertical: 10}}>
        <Button
          title="Go to Components Demo"
          onPress={()=>{
            console.log('Button Pressed')
          }}
        />
      </View>
      
      <TouchableOpacity 
        onPress={()=>{
          console.log('List Pressed')
        }}>
        <Text style={styles.buttonTextStyle}>
          Go to List Demo
        </Text>
      </TouchableOpacity>
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
  buttonTextStyle: {
    fontSize: 20,
    alignSelf: "center",
    fontWeight: 'bold',
    borderColor: 'blue',
    borderWidth: 1,
    paddingHorizontal: 30,
    paddingVertical: 5  
  }
});

export default HomeScreen;
