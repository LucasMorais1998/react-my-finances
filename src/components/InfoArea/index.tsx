import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { formatCurrentMonth } from "../../helpers/dateFilter";

import { Container, MonthArea, ResumeArea, MonthTitle } from "./styles";

interface IInforAreaProps {
  currentMonth: string;
  onMonthChange: (newMonth: string) => void;
  income: number;
  expense: number;
}

const InfoArea = ({ currentMonth, onMonthChange }: IInforAreaProps) => {
  const handlePrevMonth = () => {
    let [year, month] = currentMonth.split("-");
    let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);

    currentDate.setMonth(currentDate.getMonth() - 1);
    onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
  };

  const handleNextMonth = () => {
    let [year, month] = currentMonth.split("-");
    let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);

    currentDate.setMonth(currentDate.getMonth() + 1);
    onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
  };

  return (
    <Container>
      <MonthArea>
        <FaArrowLeft onClick={handlePrevMonth} className="arrow-left-icon" />
        <MonthTitle>{formatCurrentMonth(currentMonth)}</MonthTitle>
        <FaArrowRight onClick={handleNextMonth} className="arrow-right-icon" />
      </MonthArea>

      <ResumeArea></ResumeArea>
    </Container>
  );
};

export default InfoArea;
