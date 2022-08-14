import { useEffect, useState } from "react";

import { Item } from "../../@types/Item";
import { Category } from "../../@types/Category";
import { items } from "../../data/items";
import { categories } from "../../data/categories";

import { getCurrentMonth, filterListByMonth } from "../../helpers/dateFilter";

import InfoArea from "../InfoArea";
import InputArea from "../InputArea";
import TableArea from "../TableArea";

import { Container } from "./styles";

const Dashboard = () => {
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  useEffect(() => {
    let incomeCount = 0;
    let expenseCount = 0;

    for (let i in filteredList) {
      if (categories[filteredList[i].category].expense) {
        expenseCount += filteredList[i].value;
      } else {
        incomeCount += filteredList[i].value;
      }
    }

    setIncome(incomeCount);
    setExpense(expenseCount);
  }, [filteredList]);

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  };

  const handleAdditem = (item: Item) => {
    let newList = [...list];

    newList.push(item);

    setList(newList);
  };

  return (
    <Container>
      <InfoArea
        currentMonth={currentMonth}
        onMonthChange={handleMonthChange}
        income={income}
        expense={expense}
      />

      <InputArea onAdd={handleAdditem} />

      <TableArea list={filteredList} />
    </Container>
  );
};

export default Dashboard;
