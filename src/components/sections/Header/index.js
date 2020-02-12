import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const StyledHeader = styled.div`
background-color:lime;
display:flex;
align-items:center;
justify-content:space-around
`

function Header(props){
   const langChange = (e) => {
        props.setLang(e.target.value)
    }
    return(
        <StyledHeader>
             <ul>
                <li>
                    <Link to='/' >{props.langData._home_} </Link>
                </li>
                <li>
                    <Link to='/contacts'>{props.langData._contacts_} </Link>
                </li>
             </ul>
             <select onChange={langChange} value={props.lang}>
                 <option value ='am'>AM</option>
                 <option value ='ru'>RU</option>
                 <option value ='eng'>ENG</option>
             </select>
        </StyledHeader>
    );
}
    
export default Header;