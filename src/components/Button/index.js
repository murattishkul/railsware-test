import { Button, Link } from './atoms';
import { useTheme } from 'styled-components'

const ButtonComponent = ({children, secondary, danger, link, to, width, height}) => {
  const theme = useTheme()
  return link ?
    <Link href={to}>{children}</Link> :
    <Button
      color={danger ? theme.danger : (secondary ? theme.secondary : theme.primary)}
      width={width}
      height={height}
    >
      {children}
    </Button>;
}

export default ButtonComponent;