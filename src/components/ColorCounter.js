import React from 'react'
import { View, Text, Button, StyleSheet} from 'react-native'

const ColorCounter = ({ color, onIncrease, onDecrease}) => {
    return (
        <View>
            <Text style={{...styles.titleTextStyle, color: color}}>{color.toUpperCase()}</Text>
            <View style={styles.customButtonStyle}>
                <Button 
                    title={`Increase ${color}`} 
                    onPress={()=>{
                        onIncrease();
                    }}
                />
            </View>
            <View style={styles.customButtonStyle}>
                <Button 
                    title={`Decrease ${color}`} 
                    onPress={()=>{
                        onDecrease();
                    }}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    customButtonStyle: {
        paddingHorizontal: 20, 
        paddingVertical: 5
    },
    titleTextStyle: {
        alignSelf: 'center',
        fontSize: 25,
        fontWeight: 'bold'
    }
})

export default ColorCounter
