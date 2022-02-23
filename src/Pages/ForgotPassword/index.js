import { ReactComponent as ForgotPasswordLogo } from 'assets/forgot_password.svg';
import Typography from "components/Typography";
import Input from "components/Input";
import Button from "components/Button";
import PageContainer from 'containers/page';
import {Footer} from './atoms';

const ForgotPasswordPage = () => {
  return (
    <PageContainer>
      <ForgotPasswordLogo/>
      <Typography>Forgot Password</Typography>
      <Input type={"email"}/>
      <Button style={{marginTop: 14, marginBottom: 14}}>RESET</Button>
      <Footer>
        <Typography secondary>{"Already have an account? "}</Typography>
        <Button link to={"login"}>Login here</Button>
      </Footer>
    </PageContainer>
  )
}

export default ForgotPasswordPage;