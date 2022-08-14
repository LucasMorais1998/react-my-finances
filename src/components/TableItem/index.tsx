import { categories } from "../../data/categories";
import { Item } from "../../@types/Item";
import { formatDate } from "../../helpers/dateFilter";

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
          {categories[item.category].title}
        </TableCategory>
      </TableColumn>
      <TableColumn>{item.title}</TableColumn>
      <TableColumn>
        <TableValue color={categories[item.category].expense ? "red" : "green"}>
          {categories[item.category].expense
            ? `- R$${item.value}`
            : `+ R$${item.value} `}
        </TableValue>
      </TableColumn>
    </TableLine>
  );
};

export default TableItem;
