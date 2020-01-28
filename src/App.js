import React, { useEffect,useState } from 'react';
import GlobalStyles from './styles/GlobalStyles';
import { Blok , Text } from './components';
import { Users } from './pages'


const App = () => {
   
    return (
        <>
            <GlobalStyles />
            <Users  />
           
        </>
    )
};


export default App;