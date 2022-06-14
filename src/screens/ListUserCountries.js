import {React,useState,AsyncStorage,useEffect} from 'react';
import {Text,FlatList,View,StyleSheet,TouchableOpacity} from 'react-native';
import CountryEle from '../components/CountryEle';
import { Octicons } from '@expo/vector-icons';

//(item) =>{del(index);deleteCountry(index)}
    
    
const ListUserCountries = ({navigation}) =>{
    const [countries,setCountries] = useState(navigation.getParam("countries"));
    const del = navigation.getParam("del").deleteCountry;
    const deleteCountry = (index) => {
        let arr = [...countries];
        arr.splice(index,1)
        setCountries(arr);
    }
    return (<View>
        <Text style = {styles.headingStyle}>My Countries:</Text>
        <FlatList 
            data={countries}
            keyExtractor = {(name)=>Math.random(1)*99999}
            renderItem = {({item,index})=>{
                return (<View style = {styles.containerStyle}>
                <CountryEle name = {item}/>
                <TouchableOpacity onPress={(item) =>{del(index);deleteCountry(index)}}>
                    <View style = {styles.iconContainer}>
                        <Octicons style = {styles.iconStyle} size = {37} name = "trash"/>
                    </View>
                </TouchableOpacity>
                
                </View>)
            }}
        />
    </View>
    )
}
const styles = StyleSheet.create({
    headingStyle: {
        alignSelf:'center',
        marginVertical:20,
        fontWeight:'bold',
        fontSize: 20
    },
    containerStyle:{
        flexDirection: 'row'
    },
    iconContainer: {
        justifyContent: 'center',
        marginRight:5,
        backgroundColor: '#F0EEEE',
        borderColor:'black',
        borderWidth: 1,
        height:50,
        width:45
    },
    iconStyle:{
        alignSelf:'center'
    }
})
export default ListUserCountries;