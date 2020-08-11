import React from "react";
import { Text, StyleSheet, ScrollView, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
  return (
    <ScrollView>
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

      <View style={styles.buttonCustomStyle}>
        <Button
          title="Go to Image Demo"
          onPress={()=>{
            props.navigation.navigate('Image')
          }}
        />
      </View>

      <View style={styles.buttonCustomStyle}>
        <Button
          title="Go to Counter Demo"
          onPress={()=>{
            props.navigation.navigate('Counter')
          }}
        />
      </View>

      <View style={styles.buttonCustomStyle}>
        <Button
          title="Go to Color Demo"
          onPress={()=>{
            props.navigation.navigate('Color')
          }}
        />
      </View>

      <View style={styles.buttonCustomStyle}>
        <Button
          title="Go to Square Demo"
          onPress={()=>{
            props.navigation.navigate('Square')
          }}
        />
      </View>

      <View style={styles.buttonCustomStyle}>
        <Button
          title="Go to Counter Exercise Demo"
          onPress={()=>{
            props.navigation.navigate('CounterEx')
          }}
        />
      </View>

      <View style={styles.buttonCustomStyle}>
        <Button
          title="Go to Text Demo"
          onPress={()=>{
            props.navigation.navigate('Text')
          }}
        />
      </View>

      <View style={styles.buttonCustomStyle}>
        <Button
          title="Go to Box Object Model Demo"
          onPress={()=>{
            props.navigation.navigate('Box')
          }}
        />
      </View>
      <View style={styles.buttonCustomStyle}>
        <Button
          title="Go to Flex Box Demo"
          onPress={()=>{
            props.navigation.navigate('Flex')
          }}
        />
      </View>
    </ScrollView>
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
