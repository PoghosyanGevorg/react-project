import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import { Blok } from './components';


const App = () => {
    return (
        <>
            <GlobalStyles />
            <h1>Hello !!!!</h1>
            <Blok justifyContent='flex-end' width="500px" height="50px" bgColor="orange" border="5px dashed" ></Blok>

        </>
    )
};

export default App;