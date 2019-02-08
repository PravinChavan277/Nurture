import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const Header = ({headerText, children}) =>{
    const {headerStyle, viewStyle} = styles;
    return(        
        <View style={viewStyle}>
            <Text style={headerStyle}>{headerText}</Text>            
            {children}
        </View>        
    );
};

const styles = StyleSheet.create({
    headerstyle: {
      flex: 2,  
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },   
    viewStyle:{
        backgroundColor:'#F8F8F8',
        flexDirection:'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',     
        shadowOffset: {width: 0, height: 2},
        elevation: 2,
        position: 'relative'
    }
  });
  
export default Header;