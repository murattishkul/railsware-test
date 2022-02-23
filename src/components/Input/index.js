import { Input, UserIcon, LockIcon, InputContainer } from './atoms';
import {useRef, useState} from 'react';
import useOnClickOutside from 'utils/hooks/useOnClickOutside'
import {useTheme} from 'styled-components';

const InputComponent = ({type, placeholder}) => {
  let inputRef = useRef();
  const ref = useRef();
  const theme = useTheme();
  const [focused, setFocused] = useState(false);
  useOnClickOutside(ref, () => setFocused(false));

  const handleInputClick = () => {
    if(inputRef) inputRef.focus();
    setFocused(true);
  }

  return (
    <InputContainer onClick={() => handleInputClick()} color={focused ? '#1A4F8B' : '#C3C3C3'} ref={ref}>
      {type==="email" && <UserIcon fill={focused ? theme.primary : '#AEAEAE'}/>}
      {type==="password" && <LockIcon fill={focused ? theme.primary : '#AEAEAE'}/>}
      <Input ref={(ip) => inputRef = ip}  type={type} placeholder={placeholder}/>
    </InputContainer>
  )
}

export default InputComponent;