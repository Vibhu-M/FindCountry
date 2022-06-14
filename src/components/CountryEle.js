import React from 'react';
import {Text,View,StyleSheet} from 'react-native';

const CountryEle = ({name}) => {
    return (<View style = {styles.viewStyle}>
        <Text style = {styles.textStyle}>{name}</Text>
    </View>)
}

const styles = StyleSheet.create({
    viewStyle: {
        height:50,
        justifyContent:'center',
        marginBottom:5,
        marginLeft:15,
        marginRight:7,
        backgroundColor: '#F0EEEE',
        borderColor:'black',
        borderWidth:1,
        flex:1
    },
    textStyle: {
        alignSelf: 'center',
    }
})
export default CountryEle;