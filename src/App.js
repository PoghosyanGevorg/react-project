import React, { useEffect,useState } from 'react';
import GlobalStyles from './styles/GlobalStyles';
import { Blok , Text } from './components';


const App = (props) => {
    useEffect((props)=>{
        fetch('https://api.github.com/users')
        .then(response => {
            response.json()
                .then((data)=>{
                    const names = data.map(p => p.login);
                    const avatar = data.map(p => p.avatar_url);
                    console.log(names,avatar);
                    
                })
        })
    })

    return (
        <>
            <GlobalStyles />
            <h1>Hello !!!!</h1>
            <Blok 
            justifyContent='flex-end' 
            width="500px" height="50px" 
            bgColor="orange"
            border="5px dashed" >privet {props.names}</Blok>
            <Text color="red" size="">fgfgfgf</Text>
        </>
    )
};

// https://www.robinwieruch.de/react-hooks-fetch-data
export default App;