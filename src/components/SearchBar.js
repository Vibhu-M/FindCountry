import React,{useState} from 'react';
import {Text,TextInput,View,StyleSheet} from 'react-native';
import {Feather} from '@expo/vector-icons';

import { borderColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

const SearchBar = ({term, onTermChange,onTermSubmit}) => {
    return(<View style = {styles.barBackgroundStyle}>
        <Feather  style = {styles.iconStyle} name = 'search' />
        <TextInput 
            autoCorrect = {false}
            autoCapitalize = "none"
            style = {styles.inputStyle} 
            placeholder='Enter Country'
            value= {term}
            onChangeText={onTermChange}
            onEndEditing = {onTermSubmit}
              />
    </View>)
}

const styles = StyleSheet.create({
    barBackgroundStyle : {
        marginTop: 10,
        borderRadius: 20,
        backgroundColor: '#F0EEEE',
        height:50,
        marginHorizontal: 15,
        flexDirection: 'row'
    },
    inputStyle:{
        flex:1,
    },
    iconStyle : {
        fontSize:30,
        marginHorizontal: 10,
        alignSelf: 'center'
    }
})

export default SearchBar;