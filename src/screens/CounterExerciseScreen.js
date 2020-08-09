import React, { useReducer } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

const CounterExerciseScreen = () => {
    const reducer = (state, action)=>{
        switch(action.type){
            case 'increase': 
                return {count: state.count+action.payload};
            case 'decrease': 
                return (state.count+action.payload < 0)? state: {...state, count: state.count+action.payload};
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, {count: 0})

    return (
        <View>
            <View style={styles.customButtonStyle}>
                <Button 
                    title="Increase Count"
                    onPress = {()=>{
                        dispatch({type: 'increase', payload: 1})
                    }}
                />
            </View>
            <View style={styles.customButtonStyle}>
                <Button 
                    title="Increase Count"
                    onPress = {()=>{
                        dispatch({type: 'decrease', payload: -1})
                    }}
                />
            </View>
            <View>
                <Text style={styles.textStyle}>Count: {state.count}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    customButtonStyle: {
        marginHorizontal: 20,
        marginVertical: 5
    },
    textStyle: {
        alignSelf: 'center',
        fontSize: 30,
        fontWeight: 'bold'
    }
})

export default CounterExerciseScreen
