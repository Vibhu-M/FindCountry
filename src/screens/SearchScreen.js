import React,{useState,useContext,useEffect} from 'react';
import {Text,View,StyleSheet,ScrollView,TouchableNativeFeedbackProps} from 'react-native'
import SearchBar from '../components/SearchBar.js';
import CountryDetails from '../components/CountryDetails.js'; 
import useResults from '../hooks/useResults.js';
import Button from '../components/Button.js';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CountryNeighbours from '../components/CountryNeighbours.js';

const SearchScreen = () => {
    const [searchTerm,setSearchTerm] = useState("");
    const [showNeighbours,setShowNeighbours] = useState(false);
    const [getCountryData,results,errorMessage] = useResults("name");
    const [test,setTest] = useState({});
    //console.log(results)
  
    return (
        <ScrollView>
        <View style={{flex:1,alignItems:'center'}}>
            <SearchBar 
                term = {searchTerm} 
                onTermChange = {(text) => setSearchTerm(text)}
                onTermSubmit = {()=>{getCountryData(searchTerm);setShowNeighbours(false);}} />
            {errorMessage?<Text>{errorMessage}</Text>:null }
            {Object.keys(results).length>0?<View>
                <CountryDetails details={results} />
                
                <TouchableOpacity style= {{alignSelf:'center',marginTop:15}} onPress={()=> setShowNeighbours(true)}>
                    <Button title = "Neighbours" />
                </TouchableOpacity></View>  :null}
            {showNeighbours?<CountryNeighbours neighbours={results.borders} />:null}
        </View>
        </ScrollView>
    )
}
export default SearchScreen;
