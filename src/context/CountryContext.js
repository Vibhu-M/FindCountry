import React from 'react';

const CountryContext = React.createContext();

export const CountryProvider = ({children}) =>{
    return <CountryContext.Provider value = {5}>{children}</CountryContext.Provider>;
};
export default CountryContext;