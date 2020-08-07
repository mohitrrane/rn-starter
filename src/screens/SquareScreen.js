import React, {useState} from 'react'
import { View, Button, StyleSheet, FlatList, Text } from 'react-native'
import ColorCounter from '../components/ColorCounter'

const SquareScreen = () => {
    const COLOR_INCREMENT = 10
    const [red, setRed] = useState(0)
    const [green, setGreen] = useState(0)
    const [blue, setBlue] = useState(0)

    return (
        <View>
            <ColorCounter 
                onIncrease={()=> setRed(red+COLOR_INCREMENT)} 
                onDecrease={()=> setRed(red-COLOR_INCREMENT)} 
                color='red'
            />
            <ColorCounter 
                onIncrease={()=> setGreen(green+COLOR_INCREMENT)} 
                onDecrease={()=> setGreen(green-COLOR_INCREMENT)} 
                color='green'
            />
            <ColorCounter 
                onIncrease={()=> setBlue(blue+COLOR_INCREMENT)} 
                onDecrease={()=> setBlue(blue-COLOR_INCREMENT)} 
                color='blue'
            />
            <View style={styles.colorContainerStyle}>
                <View style={{...styles.colorSquareStyle, backgroundColor:`rgb(${red}, ${green}, ${blue})`}}/>
            </View>

            <Text style={styles.bottomTextStyle}>
                Red: {red}, Green: {green}, Blue: {blue}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    customButtonStyle: {
        paddingHorizontal: 20, 
        paddingVertical: 10
    },
    colorContainerStyle: {
        alignItems: 'center'
    },
    colorSquareStyle: {
        height: 150,
        width: 150,
        borderWidth: 2,
        borderColor: 'black'
    },
    bottomTextStyle: {
        alignSelf: 'center',
        fontSize: 20,
    }
})

export default SquareScreen
