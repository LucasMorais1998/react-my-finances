import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import { formatCurrentMonth } from "../../helpers/dateFilter";

import ResumeItem from "../ResumeItem";

import { Container, MonthArea, MonthTitle, ResumeArea } from "./styles";

interface IInfoAreaProps {
  currentMonth: string;
  onMonthChange: (newMonth: string) => void;
  income: number;
  expense: number;
}

const InfoArea = ({
  currentMonth,
  onMonthChange,
  income,
  expense,
}: IInfoAreaProps) => {
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

      <ResumeArea>
        <ResumeItem title="Receitas" value={income} />
        <ResumeItem title="Despesas" value={expense} />
        <ResumeItem
          title="Balanço"
          value={income - expense}
          color={income - expense < 0 ? "red" : "green"}
        />
      </ResumeArea>
    </Container>
  );
};

export default InfoArea;
