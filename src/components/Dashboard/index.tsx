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

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));

  },[list, currentMonth])


  return (
    <Container>
      <InfoArea />
      <TableArea list={filteredList}/>
    </Container>
  );
};

export default Dashboard;
