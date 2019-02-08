import React from 'react';
import { Text, TouchableHighlight, StyleSheet } from 'react-native';


const LinkButton = ({ onPress, children }) => {
    const { buttonStyle, btnTextStyle } = styles;
    return (
        <TouchableHighlight onPress={onPress} style={buttonStyle}>
            <Text style={btnTextStyle}>
                {children}
            </Text>
        </TouchableHighlight>                     
        );        
};

const styles = StyleSheet.create({
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',        
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
  
export default LinkButton;
