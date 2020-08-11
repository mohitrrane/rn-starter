import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const FlexboxScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textOneStyle}>Child #1</Text>
            <Text style={styles.textTwoStyle}>Child #2</Text>
            <Text style={styles.textThreeStyle}>Child #3</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 2,
        borderColor: 'black',
        alignItems: 'stretch', //(default) other options center, flex-start, flex-end
        flexDirection: 'column', //(default) other options column-reverse, row, row-reverse
        justifyContent: 'flex-start', //(default) other options flex-end, center, space-around, space-between, space-evenly
        height: 200
    },
    textOneStyle: {
        borderWidth: 1,
        borderColor: 'blue',
        flex: 1,
        ...StyleSheet.absoluteFillObject
        //position: 'absolute', //(default) other options absolute
        //top: 10 // Options are top, bottom, left, right
    },
    textTwoStyle: {
        borderWidth: 1,
        borderColor: 'red',
        flex: 2,
        alignSelf: 'center'
    },
    textThreeStyle: {
        borderWidth: 1,
        borderColor: 'red',
        flex: 3,
        alignSelf: 'flex-start'
    }
})

export default FlexboxScreen
