import React from 'react';
import {Text,StyleSheet,View} from 'react-native';

const Button = ({title}) =>{
    return (<View style = {styles.containerStyle}>
        <Text style = {styles.titleStyle}>{title}</Text>
    </View>)
}

const styles = StyleSheet.create({
    containerStyle: {
        height: 38,
        width: 110,
        backgroundColor: '#a1afbf',//#8db1eb
        borderRadius:15,
        justifyContent:'center',
        alignContent:'center',
        marginRight:5,
        
    },
    titleStyle:{
        paddingTop:7,
        alignSelf: 'center',
        fontStyle: 'italic',
        fontWeight: '500',
        flex:1
    }
})

export default Button