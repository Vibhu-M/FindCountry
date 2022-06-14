import React,{useState,useEffect} from 'react';
import {Text,View,StyleSheet} from 'react-native';
import useResults from '../hooks/useResults';
import CountryDetails from '../components/CountryDetails';

const CountryScreen = ({navigation}) => {
    const [getCountryData,results,errorMessage] = useResults('name');
    const name = navigation.getParam("countryName");
    useEffect(() => {
        getCountryData(name);
    })
    console.log(name);
    return (<View>
        {results? <CountryDetails details={results}/>:null}
    </View> 
    )
}

export default CountryScreen;
