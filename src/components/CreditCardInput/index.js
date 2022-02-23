import Input from "components/Input";
import Typography from "../Typography";
import {CardInputContainer, CardMetaContainer, CardMeta} from './atoms';

const CreditCardInput = () => {
  return (
    <CardInputContainer>
      <Input placeholder={"Card Number"} type={"number"}/>
      <CardMetaContainer>
        <CardMeta>
          <Input placeholder={"MM/YY"} />
          <Input placeholder={"CVV"} type={"number"}/>
        </CardMeta>
        <Typography secondary small>What's is this?</Typography>
      </CardMetaContainer>
      <Input placeholder={"ZIP/Postal Code"}/>
    </CardInputContainer>
  )
}


export default CreditCardInput;