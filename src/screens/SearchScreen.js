import React,{useState,AsyncStorage} from 'react';
import {Text,View,StyleSheet,ScrollView,TouchableNativeFeedbackProps} from 'react-native'
import SearchBar from '../components/SearchBar.js';
import CountryDetails from '../components/CountryDetails.js'; 
import useResults from '../hooks/useResults.js';
import Button from '../components/Button.js';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CountryNeighbours from '../components/CountryNeighbours.js';

//Object.keys(results).length>0
const SearchScreen = ({navigation}) => {
    const [searchTerm,setSearchTerm] = useState("");
    const [showNeighbours,setShowNeighbours] = useState(false);
    const [getCountryData,results,errorMessage] = useResults("name");
    const [showCountry,setShowCountry] = useState(false);
    const [userCountries,setUserCountries] = useState([]);
    
    
  
    const addCountry =(name)=>{
        if(!userCountries.includes(name)){
            setUserCountries([...userCountries,name]);
        }
        console.log(userCountries)
    }
    const deleteCountry = (index) => {
        let arr = [...userCountries];
        arr.splice(index,1)
        setUserCountries(arr);
    }
    return (
        <ScrollView>
        <View style={{flex:1,alignItems:'center'}}>
            <SearchBar 
                term = {searchTerm} 
                onTermChange = {(text) => setSearchTerm(text)}
                onTermSubmit = {()=>{getCountryData(searchTerm);setShowNeighbours(false);setShowCountry(true);}} />
            {errorMessage?<Text>{errorMessage}</Text>:null }
            {results?
            <View >
                <CountryDetails details={results} />
                <View style = {{flexDirection:'row'}}>
                    <TouchableOpacity style= {{alignSelf:'center',marginTop:15}} onPress={()=> setShowNeighbours(true)}>
                        <Button title = "Neighbours" />
                    </TouchableOpacity>
                    <TouchableOpacity style= {{alignSelf:'center',marginTop:15}} onPress={()=> {addCountry(results.name)}}>
                        <Button title = "Add Country" />
                    </TouchableOpacity>
                    <TouchableOpacity style= {{alignSelf:'center',marginTop:15}} onPress={()=> {navigation.navigate("List",{countries: userCountries,del:{deleteCountry}})}}>
                        <Button title = "My Countries" />
                    </TouchableOpacity>
                </View>
            </View>
            :showCountry?<Text>Country Not Found!</Text>:null}
            {showNeighbours&&results.borders?<CountryNeighbours neighbours={results.borders} />:showNeighbours?<Text>No Neighbours found!</Text>:null}
        </View>
        </ScrollView>
    )
}
export default SearchScreen;
