import styled from 'styled-components';

const Blok = styled.div`
    
    ${ ({width}) => width ? `width: ${width};` : '' }
    ${ ({height}) => height ? `height: ${height};` : '' }
    ${ ({bgColor}) => bgColor ? `background-color: ${bgColor};` : '' }
    ${ ({border}) => border ? `border: ${border}` : ""}
    ${ ({margin}) => margin ? `margin: ${margin}` : ""}
    ${ ({padding}) => padding ? `padding: ${padding}` : ""}
    ${ ({radius}) => radius ? `border-radius: ${radius}` : ""}
    ${ ({justifyContent}) => justifyContent ? `justify-content: ${justifyContent}` : ""}
    ${ ({direction}) => direction ? `direction: ${direction}` : ""}
    ${ ({position}) => position ? `position: ${position}` : ""}
    ${ ({top}) => top ? `top: ${top}` : ""}
    ${ ({left}) => left ? `left: ${left}` : ""}
    ${ ({zIndex}) => zIndex ? `z-index: ${zIndex}` : ""}
    ${ ({overflow}) => overflow ? `overflow: ${overflow}` : ""}
`;

export default Blok;

