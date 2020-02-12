import React from 'react';
import { Redirect } from 'react-router-dom'

function NotFound(){
    return(
        <div>
          <Redirect to='/'/>
          Page Not Found     
        </div>
    );
}

export default NotFound;