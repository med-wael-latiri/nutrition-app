import { Text, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native'
import React from 'react'


const Button = (props) => {
    const filledBgColor = props.color || '#8a3ffc';
    const outlinedColor = 'white';
    const bgColor = props.filled ? filledBgColor : outlinedColor;
    const textColor = props.filled ? 'white' : '#8a3ffc';

    return (
        <TouchableOpacity
            style={{
                ...styles.button,
                ...{ backgroundColor: bgColor},
                ...props.style
            }}
            onPress={props.onPress}
            disabled = {props.isDisabled}
        >
        { props.isLoading ? ( <ActivityIndicator size="large" color='white' /> )
        : (
            <Text style={{ fontSize: 18, ...{ color: textColor } }}>{props.title}</Text>
        ) }

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        paddingBottom: 16,
        paddingVertical: 10,
        paddingHorizontal:20,
        borderColor: '#8a3ffc',
        borderWidth: 2,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',


    }
})
export default Button