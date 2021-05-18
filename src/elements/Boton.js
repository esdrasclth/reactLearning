import styled, {css} from 'styled-components';

const Boton = styled.button`
    background: #83d394;
    color: #fff;
    display: inline-block;
    padding: 20px;
    border: none;
    font-weight: bold;
    font-family: Arial, sans-serif;
    cursor: pointer;
    transition: .3s ease all;
    border-radius: 3px;
    margin-right: 10px;

    &:hover{
        background: #44a559;
        color: #fff;
    }

    ${props => props.negro && css`
        background: #000000;
        color: #fff;
    `} 
    
`;

export default Boton;