import styled from 'styled-components';
import { ReactComponent as UserLogo } from 'assets/contacts_icon.svg';
import { ReactComponent as LockLogo } from 'assets/lock_icon.svg';

export const Input = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  height: 16px;
  padding-left: 18px;

  font-family: ${props => props.theme.fontFamily};
  font-style: normal;
  font-weight: normal;
  font-size: ${props => props.theme.fontSize}px;
  line-height: 16px;
  color: ${props => props.theme.primary};
 
`;

export const UserIcon = styled(UserLogo)`
  padding-left: 15px;
  path {
    fill: ${props => props.fill};
  }
`;

export const LockIcon = styled(LockLogo)`
  padding-left: 15px;
  path {
    fill: ${props => props.fill};
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items : center;
  overflow: hidden;
  width: 100%;
  height: 50px;
  
  background: #FFFFFF;
  border: 1px solid ${props => props.color};
  border-radius: 5px;
  
  :focus {
    border: none;
    border: 1px solid #1A4F8B;
  }
  
   /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }
`;