import styled from 'styled-components';

export const Button = styled.button`
  width: ${props => props.width ? props.width : '340'}px;
  height: ${props => props.height ? props.height : '50'}px;
  border-radius: 8px;
  background: ${props => props.color};
  color: white;
  border: none;
  font-family: ${props => props.theme.fontFamily};
  font-size: ${props => props.theme.fontSize}px;
  line-height: 20px;
  text-align: center;
  letter-spacing: -0.408px;
  :hover{
    opacity: 0.9;
   }
`;

export const Link = styled.a`
  align-self: flex-end;
  font-family: ${props => props.theme.fontFamily};
  font-size: ${props => props.theme.fontSize}px;
  line-height: 19px;
  display: flex;
  align-items: center;
  color: ${props => props.theme.primary};
  text-decoration: none;  
  :hover {
    text-decoration: underline;
  }
`;