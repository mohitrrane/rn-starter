import React, {useState} from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

const CounterScreen = () => {
    var [counter, setCounter] = useState(0)

    return (
        <View>
            <View style={styles.customButtonStyle}>
                <Button 
                    title="Increase Count"
                    onPress={()=>{
                        setCounter(counter+1)
                    }}    
                />
            </View>
            <View style={styles.customButtonStyle}>
                <Button 
                    title="Decrease Count"
                    onPress={()=>{
                        setCounter(counter-1)
                    }}    
                />
            </View>
            <View>
                <Text style={styles.textStyle}>Counter : {counter}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    customButtonStyle: {
        paddingHorizontal: 20, 
        paddingVertical: 10
    },
    textStyle: {
        fontSize: 30,
        alignSelf: 'center'
    }
})

export default CounterScreen
