import React,{useState,useEffect} from 'react';
import CountryDetails from './CountryDetails';
import {Text,View,StyleSheet,FlatList} from 'react-native'
import useResults from '../hooks/useResults';


/* <CountryDetails details={results}/> */
//<Text>Hello</Text>
    
const CountryNeighbours = ({neighbours}) => {
    console.log(neighbours.length)
    const [results,setResults] = useState([]);
    const [errorMessage,setErrorMessage] = useState("");
    const res = [];
    const getCountryDataByCode = (code) => {
        fetch(`https://restcountries.com/v2/alpha/${code}`)
        .then(response => response.json(),err => {Promise.reject(err);})
        .then(data => setResults([...results,data]))
    }
    useEffect(()=>
    {
         for(let i=0; i<neighbours.length; ++i){
            getCountryDataByCode(neighbours[i]);
        }
    },[])
    //
   return (<View>
    <FlatList 
        data={results} 
        keyExtractor = {(code)=>Math.random()*999999}
        horizontal
        renderItem = {({item}) => {
            console.log(item)
            return <View style = {styles.containerStyle}><CountryDetails details={item}/></View>
        }}/>
</View>)    
}
const styles = StyleSheet.create({
    containerStyle:{
        marginBottom:10,
        marginLeft:5,
        borderColor:'gray',
    }
})
export default CountryNeighbours;