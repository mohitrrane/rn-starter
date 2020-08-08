import React, {useState} from 'react'
import { View, Button, StyleSheet, FlatList, Text } from 'react-native'
import ColorCounter from '../components/ColorCounter'

const SquareScreen = () => {
    const COLOR_INCREMENT = 10
    const [red, setRed] = useState(0)
    const [green, setGreen] = useState(0)
    const [blue, setBlue] = useState(0)

    const setColor = (color, change) => {
        switch (color){
            case 'red': 
                (red+change > 255 || red+change < 0)? null: setRed(red+change);
                return;
            case 'green': 
                (green+change > 255 || green+change < 0)? null: setGreen(green+change);
                return;
            case 'blue': 
                (blue+change > 255 || blue+change < 0)? null: setBlue(blue+change);
                return;
            default:
                return;
        }
    };

    return (
        <View>
            <ColorCounter 
                onIncrease={()=> setColor('red', COLOR_INCREMENT)} 
                onDecrease={()=> setColor('red', -1*COLOR_INCREMENT)} 
                color='red'
            />
            <ColorCounter 
                onIncrease={()=> setColor('green', COLOR_INCREMENT)} 
                onDecrease={()=> setColor('green', -1*COLOR_INCREMENT)} 
                color='green'
            />
            <ColorCounter 
                onIncrease={()=> setColor('blue', COLOR_INCREMENT)} 
                onDecrease={()=> setColor('blue', -1*COLOR_INCREMENT)} 
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
