import { ReactComponent as CreditCardLogo } from 'assets/credit_card.svg';
import Typography from "components/Typography";
import Button from "components/Button";
import CreditCardInput from 'components/CreditCardInput';
import PageContainer from 'containers/page';

const UpgradePage = () => {
  return (
    <PageContainer>
      <Typography>Get Pro Account</Typography>
      <CreditCardLogo style={{marginTop: 14, marginBottom: 14}}/>
      <CreditCardInput />
      <Button danger style={{marginTop: 14, marginBottom: 14}}>UPGRADE</Button>
    </PageContainer>
  )
}

export default UpgradePage;