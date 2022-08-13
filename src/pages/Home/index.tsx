import Dashboard from "../../components/Dashboard";
import Header from "../../components/Header";

import { Container } from "./styles";

const Home = () => {
  return (
    <Container>
      <Header/>
      <Dashboard/>
    </Container>
  );
};

export default Home;
