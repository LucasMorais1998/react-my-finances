import { categories } from "../../data/categories";
import { Item } from "../../@types/Item";
import { formatDate } from "../../helpers/dateFilter";
import { formatCurrency } from "../../helpers/formatCurrency";

import { FaCoins, FaMoneyBill, FaShoppingCart } from "react-icons/fa";
import { MdFastfood, MdSensorDoor } from "react-icons/md";

import { TableLine, TableColumn, TableCategory, TableValue } from "./styles";

interface ITableItemProps {
  item: Item;
}

const TableItem = ({ item }: ITableItemProps) => {
  return (
    <TableLine>
      <TableColumn>{formatDate(item.date)}</TableColumn>
      <TableColumn>
        <TableCategory color={categories[item.category].color}>
          {
            (categories[item.category].title === "Renda Extra" && (
              <FaCoins />
            )) ||
            (categories[item.category].title === "Alimentação" && (
              <MdFastfood />
            )) ||
            (categories[item.category].title === "Aluguel" && (
              <MdSensorDoor />
            )) ||
            (categories[item.category].title === "Salário" && (
              <FaMoneyBill />
            )) ||
            (categories[item.category].title === "Mercado" && (
              <FaShoppingCart />
            ))
          }
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
