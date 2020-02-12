import React from 'react';
import ButtonStyled from './ButtonStyled'
import { tsPropertySignature } from '@babel/types';

const Button = (props) => {
         return(
             <ButtonStyled {...props}>
                 { props.children }
             </ButtonStyled>
         )
}

export default Button;