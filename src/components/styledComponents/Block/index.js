import styled from 'styled-components';

const Blok = styled.div`
    
    ${ ({top}) => top ? `top: ${top};` : ""}
    ${ ({left}) => left ? `left: ${left};` : ""}
    ${ ({flex}) => flex ? `display:flex; ` : ""}
    ${ ({wrap}) => wrap ? 'flex-wrap: wrap; ' : ""}
    ${ ({width}) => width ? `width: ${width};` : '' }
    ${ ({border}) => border ? `border: ${border};` : ""}
    ${ ({margin}) => margin ? `margin: ${margin};` : ""}
    ${ ({height}) => height ? `height: ${height};` : '' }
    ${ ({zIndex}) => zIndex ? `z-index: ${zIndex};` : ""}
    ${ ({padding}) => padding ? `padding: ${padding};` : ""}
    ${ ({radius}) => radius ? `border-radius: ${radius};` : ""}
    ${ ({position}) => position ? `position: ${position};` : ""}
    ${ ({alignItems}) => alignItems ? `align-items:${alignItems} ; ` : ""}
    ${ ({overflow}) => overflow ? `overflow: ${overflow};` : ""}
    ${ ({direction}) => direction ? `flex-direction: ${direction};` : ""}
    ${ ({background}) => background ? `background: ${background};` : '' }
    ${ ({justifyContent}) => justifyContent ? `justify-content: ${justifyContent};` : ""}
    
`;

export default Blok;

