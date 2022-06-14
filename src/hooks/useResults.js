import React,{useState,useEffect} from 'react'

export default (param) => {
    const [results,setResults] = useState(null);
    const [errorMessage,setErrorMessage] = useState("");
    let getCountryData;
    const getCountryDataByName = (country) => {
        fetch(`https://restcountries.com/v2/name/${country}`)
        .then(response => response.json(),err => {Promise.reject(err);})
        .then(data => setResults(data[0]))
        .catch(err => setErrorMessage(err));
    }
    const getCountryDataByCode = (code) => {
        fetch(`https://restcountries.com/v2/alpha/${code}`)
        .then(response => response.json(),err => {Promise.reject(err);})
        .then(data => setResults(data[0]))
        .catch(err => setErrorMessage(err));
    }
    
    switch(param){
        case 'code': 
            getCountryData = getCountryDataByCode;
            break;
        case 'name':
            getCountryData = getCountryDataByName;
            break;  
        default: 
            console.log("Invalid Search Parameter");     
            break;
    }
    return [getCountryData,results,errorMessage]
}
