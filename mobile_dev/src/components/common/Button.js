import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';


const Button = (props) => {
    const { buttonStyle, btnTextStyle } = styles;
    return (
        <TouchableOpacity onPress={props.onPress} style={[buttonStyle, props.style]}>
            <Text style={btnTextStyle}>
                {props.children}
            </Text>
        </TouchableOpacity>                     
        );       
};

const styles = StyleSheet.create({
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5
    },
    btnTextStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    }
  });
  
export default Button;