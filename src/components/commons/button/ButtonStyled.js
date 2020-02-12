import styled from 'styled-components';

const ButtonStyled = styled.button`
      border:none;
      outline:none;
      background-color:${ ( { bgColor} ) => bgColor };
      color: white;
      padding:5px 10px;
      border-radius:${ ( { bgRadius} ) => bgRadius }px;
      cursor:pointer;  
`;

ButtonStyled.defaultProps = {
    bgColor: 'black',
    bgRadius: 5
}


export default ButtonStyled;