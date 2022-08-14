import { useEffect, useState } from "react";

import { Item } from "../../@types/Item";
import { Category } from "../../@types/Category";
import { items } from "../../data/items";
import { categories } from "../../data/categories";

import { getCurrentMonth, filterListByMonth } from "../../helpers/dateFilter";

import { Container } from "./styles";
import TableArea from "../TableArea";
import InfoArea from "../InfoArea";

const Dashboard = () => {
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0)

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  };

  return (
    <Container>
      <InfoArea 
        currentMonth={currentMonth}
        onMonthChange={handleMonthChange}
        income={income}
        expense={expense}
      />
      <TableArea list={filteredList} />
    </Container>
  );
};

export default Dashboard;
