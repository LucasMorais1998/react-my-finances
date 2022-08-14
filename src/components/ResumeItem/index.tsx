import { Container, ResumeItemTitle, ResumeItemInfo } from "./styles";

interface IResumeItemProps {
  title: string;
  value: number;
  color?: string;
}

const ResumeItem = ({ title, value, color }: IResumeItemProps) => {
  return (
    <Container>
      <ResumeItemTitle>{title}</ResumeItemTitle>
      <ResumeItemInfo color={color}>
        R${value}
      </ResumeItemInfo>
    </Container>
  );
};

export default ResumeItem;
