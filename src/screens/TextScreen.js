import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'

const TextScreen = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('')

    return (
        <View>
            <Text style={styles.textStyle}>Enter Name: </Text>
            <View style={styles.inputBoxStyle}> 
                <TextInput
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={name}
                    onChangeText={(newValue)=>{
                        setName(newValue)
                    }}
                />
            </View>
            <Text style={styles.textSuccessStyle}>My name is {name}</Text>

            <Text style={styles.textStyle}>Enter Password: </Text>
            <View style={styles.inputBoxStyle}> 
                <TextInput
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={password}
                    secureTextEntry={true}
                    onChangeText={(newValue)=>{
                        setPassword(newValue)
                    }}
                />
            </View>
            {(password.length < 6)? <Text style={styles.textErrorStyle}>Password must be longer than 5 characters.</Text>: null}
        </View>
    )
}

const styles = StyleSheet.create({
    inputBoxStyle: {
        borderWidth: 1,
        borderRadius: 10,
        marginHorizontal: 20,
        marginVertical: 5,
        paddingHorizontal: 5
    },
    textStyle: {
        alignSelf: 'center',
        fontSize: 25,
        fontWeight: 'bold'
    }, 
    textSuccessStyle: {
        alignSelf: 'center',
        fontSize: 20,
        color: 'green',
        marginBottom: 10,
        marginHorizontal: 20
    },
    textErrorStyle: {
        alignSelf: 'center',
        fontSize: 15,
        color: 'red',
        marginHorizontal: 20
    }
})

export default TextScreen
