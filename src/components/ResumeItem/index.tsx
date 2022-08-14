import { Container, ResumeItemTitle, ResumeItemInfo } from "./styles";

interface IResumeItemProps {
  title: string;
  value: number;
}

const ResumeItem = ({ title, value }: IResumeItemProps) => {
  return (
    <Container>
      <ResumeItemTitle>{title}</ResumeItemTitle>
      <ResumeItemInfo>R${value}</ResumeItemInfo>
    </Container>
  );
};

export default ResumeItem;
