import React from 'react'
import {Text,StyleSheet,View,Image} from 'react-native';
import { Ionicons,Entypo,MaterialCommunityIcons } from '@expo/vector-icons';
 
const CountryDetails = ({details}) =>{
    return (<View style ={styles.viewStyle}>
        <Image style = {styles.imageStyle} source = {{uri: details.flags.png }}/>
        <Text style = {styles.titleStyle}>{details.name}</Text>
        <Text style = {styles.regionStyle}>{details.subregion}</Text>
        <View style = {styles.countryDets}>
            <MaterialCommunityIcons style = {styles.iconStyle} name = 'city-variant'/>
            <Text>{details.capital}</Text>
        </View>
        <View style = {styles.countryDets}>
            <Ionicons style = {styles.iconStyle} name = 'people'/>
            <Text>{Math.floor(details.population/1000000)} Million</Text>
        </View>
        <View style = {styles.countryDets}>
            <Entypo style = {styles.iconStyle} name = 'language'/>
            <Text>{details.languages[0].name}</Text>
        </View>
        <View style = {styles.countryDets}>
            <MaterialCommunityIcons style = {styles.iconStyle} name = 'currency-usd'/>
            <Text>{details.currencies[0].code}</Text>
        </View>
    </View>)
}

const styles = StyleSheet.create({
    titleStyle:{
        fontWeight: 'bold',
        fontSize: 15,
        marginLeft:5
    },
    regionStyle:{
        marginLeft:5,
        fontStyle: 'italic',
        fontWeight: '300',
    },
    viewStyle: {
        width:270,
        marginTop:15,
        backgroundColor: '#F0EEEE',
        borderRadius:5,
        alignSelf: 'center',
    },
    imageStyle: {
        height:150,
        width:260,
        borderRadius:3,
        marginVertical: 5,
        alignSelf: 'center',
        paddingHorizontal:30
    },
    countryDets: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
        marginLeft: 5
    },
    iconStyle:{
        fontSize: 30,
        color: 'black',
        marginRight: 10
    }
})
export default CountryDetails