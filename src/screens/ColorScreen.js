import React, { useState} from 'react'
import { View, Button, StyleSheet, FlatList } from 'react-native'

const ColorScreen = () => {
    const [colors, setColors] = useState([]);

    return (
        <View>
            <View style={styles.customButtonStyle}>
                <Button 
                    title="Add Color" 
                    onPress={()=>{
                        setColors([ ...colors, randomRgb()])
                    }}
                />
            </View>
            <FlatList
                keyExtractor={item => {
                    return item;
                }}
                data={colors}
                renderItem={({item})=>{
                    return <View 
                        style={{height: 100, width: 100, backgroundColor: item}}/>
                }}
            />
        </View>
    )
}

const randomRgb = () => {
    const red = Math.floor(Math.random()*256)
    const green = Math.floor(Math.random()*256)
    const blue = Math.floor(Math.random()*256)
    return `rgb(${red}, ${green}, ${blue})`;
}

const styles = StyleSheet.create({
    customButtonStyle: {
        paddingHorizontal: 20, 
        paddingVertical: 10
    }
})

export default ColorScreen
