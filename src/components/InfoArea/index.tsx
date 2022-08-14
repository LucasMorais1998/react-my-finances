import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import { Container, MonthArea, ResumeArea, MonthTitle } from "./styles";

const InfoArea = () => {
  return (
    <Container>
      <MonthArea>
        <FaArrowLeft className="arrow-left-icon" />
        <MonthTitle>Title</MonthTitle>
        <FaArrowRight className="arrow-right-icon" />
      </MonthArea>

      <ResumeArea></ResumeArea>
    </Container>
  );
};

export default InfoArea;
