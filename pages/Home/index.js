import React from 'react';
import { Button,Counter } from '../../components';
function Home(props){
    return(
        <div>
          <p>
            {props.langData._homePage_}
          </p>
          {/* <Button bgColor='brown'>Log in</Button>   
          <Button bgColor='aqua'>Log out</Button>
          <Button>ok</Button>    */}
          <Counter/>
          <Button/>
        </div>
    );
}

export default Home;