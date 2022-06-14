import React from 'react';
import {Text,StyleSheet,View} from 'react-native';

const Button = ({title}) =>{
    return (<View style = {styles.containerStyle}>
        <Text style = {styles.titleStyle}>{title}</Text>
    </View>)
}

const styles = StyleSheet.create({
    containerStyle: {
        height: 35,
        width: 100,
        backgroundColor: 'gray',
        borderRadius:15,
        justifyContent:'center',
        alignContent:'center',
        marginRight:5
    },
    titleStyle:{
        alignSelf: 'center',
        fontStyle: 'italic',
        fontWeight: '500',
        flex:1
    }
})

export default Button