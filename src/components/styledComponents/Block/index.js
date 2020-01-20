import styled from 'styled-components';

const Blok = styled.div`
    ${ ({width}) => width ? `width: ${width};` : '' }
    ${ ({height}) => height ? `height: ${height};` : '' }
    ${ ({bgColor}) => bgColor ? `background-color: ${bgColor};` : '' }
    ${ ({border}) => border ? `border: ${border}` : ""}
    ${ ({margin}) => margin ? `margin: ${margin}` : ""}
`;

export default Blok;

