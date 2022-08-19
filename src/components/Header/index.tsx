import { BsCashCoin } from "react-icons/bs";

import { Container } from "./styles";

const Header = () => {
  return (
    <Container>
      <h1>my Finances</h1>
      <BsCashCoin className="header-title-icon"/>
    </Container>
  );
};

export default Header;
