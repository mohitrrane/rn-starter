import React, { useReducer } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import ColorCounter from '../components/ColorCounter'

const SquareScreen = () => {
    const COLOR_INCREMENT = 10
    
    const reducer = (state, action)=>{
        switch(action.colorToChange){
            case 'red': 
                return (state.red + action.amount > 255 || state.red + action.amount < 0)? state: {...state, 'red': state.red + action.amount};
            case 'green': 
                return (state.green + action.amount > 255 || state.green + action.amount < 0)? state: {...state, 'green': state.green + action.amount};
            case 'blue': 
                return (state.blue + action.amount > 255 || state.blue + action.amount < 0)? state: {...state, 'blue': state.blue + action.amount};
            default: 
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, {'red': 0, 'green': 0, 'blue': 0})

    return (
        <View>
            <ColorCounter 
                onIncrease={()=> dispatch({ colorToChange: 'red', amount: COLOR_INCREMENT})} 
                onDecrease={()=> dispatch({ colorToChange: 'red', amount: -1*COLOR_INCREMENT})} 
                color='red'
            />
            <ColorCounter 
                onIncrease={()=> dispatch({ colorToChange: 'green', amount: COLOR_INCREMENT})} 
                onDecrease={()=> dispatch({ colorToChange: 'green', amount: -1*COLOR_INCREMENT})} 
                color='green'
            />
            <ColorCounter 
                onIncrease={()=> dispatch({ colorToChange: 'blue', amount: COLOR_INCREMENT})} 
                onDecrease={()=> dispatch({ colorToChange: 'blue', amount: -1*COLOR_INCREMENT})} 
                color='blue'
            />
            <View style={styles.colorContainerStyle}>
                <View style={{...styles.colorSquareStyle, backgroundColor:`rgb(${state.red}, ${state.green}, ${state.blue})`}}/>
            </View>

            <Text style={styles.bottomTextStyle}>
                Red: {state.red}, Green: {state.green}, Blue: {state.blue}
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
