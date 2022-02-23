import { ReactComponent as LoginLogo } from 'assets/login.svg';
import PageContainer from 'containers/page';
import Button from 'components/Button';
import Input from 'components/Input';
import Typography from 'components/Typography';
import ButtonGroup from 'components/ButtonGroup';
import { PasswordContainer } from './atoms';

const LoginPage = () => {
  return (
    <PageContainer>
      <LoginLogo/>
      <Typography>Welcome Back!</Typography>
      <Input type={"email"}/>
      <PasswordContainer>
        <Input type={"password"}/>
        <Button link to={"forgot-password"} >Forgot Password?</Button>
      </PasswordContainer>
      <Button style={{marginTop: 14, marginBottom: 14}}>LOG IN</Button>
      <Typography secondary>Or connect with social</Typography>
      <ButtonGroup>
        <Button width={165} height={40} color={"blue"}>Facebook</Button>
        <Button width={165} height={40} secondary>Google</Button>
      </ButtonGroup>
    </PageContainer>
  )
}

export default LoginPage;