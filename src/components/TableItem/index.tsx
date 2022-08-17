import { Item } from "../../@types/Item";
import { categories } from "../../data/categories";
import { formatDate } from "../../helpers/dateFilter";
import { formatCurrency } from "../../helpers/formatCurrency";

import { FaCoins, FaMoneyBill, FaShoppingCart } from "react-icons/fa";
import { MdFastfood, MdSensorDoor } from "react-icons/md";

import { TableCategory, TableColumn, TableLine, TableValue } from "./styles";

interface ITableItemProps {
  item: Item;
}

const TableItem = ({ item }: ITableItemProps) => {
  const handleCategoryIcon = (categoryTitle: string) => {
    switch (categoryTitle) {
      case "Renda Extra":
        return <FaCoins />;
      case "Alimentação":
        return <MdFastfood />;

      case "Aluguel":
        return <MdSensorDoor />;

      case "Salário":
        return <FaMoneyBill />;

      case "Mercado":
        return <FaShoppingCart />;
    }
  };

  return (
    <TableLine>
      <TableColumn>{formatDate(item.date)}</TableColumn>
      <TableColumn>
        <TableCategory color={categories[item.category].color}>
          {handleCategoryIcon(categories[item.category].title)}
          {categories[item.category].title}
        </TableCategory>
      </TableColumn>
      <TableColumn>{item.title}</TableColumn>
      <TableColumn>
        <TableValue color={categories[item.category].expense ? "red" : "green"}>
          {categories[item.category].expense
            ? `- ${formatCurrency(item.value)}`
            : `+ ${formatCurrency(item.value)}`}
        </TableValue>
      </TableColumn>
    </TableLine>
  );
};

export default TableItem;
