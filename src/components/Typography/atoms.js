import styled from 'styled-components';

export const Text = styled.p`
  font-size: ${props => props.secondary ? props.theme.fontSize : 36}px;
  font-weight: ${props => props.secondary ? "normal" : "bold"};
  line-height: ${props => props.secondary ? "normal" : "42px"};
  font-family: ${props => props.theme.fontFamily};
  color: ${props => !props.secondary ? props.color : props.theme.textColor};
  margin: 0px;
`;