import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const BoxScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>Hi there</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 1,
        borderColor: 'black'
    },
    textStyle: {
        borderWidth: 2,
        borderColor: 'red',
        marginVertical: 10,
        marginHorizontal: 20,
        paddingHorizontal: 5
    }
})
export default BoxScreen
