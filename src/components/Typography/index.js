import {Text} from './atoms';
import {useTheme} from 'styled-components';

const Typography = ({children, secondary, small}) => {
  const theme = useTheme();
  if(small){
    theme.fontSize = theme.small.fontSize;
    theme.textColor = theme.small.textColor;
  }
  return (
    <Text
      secondary={secondary}
      theme={theme}
    >{children}</Text>
  )
}

export default Typography;