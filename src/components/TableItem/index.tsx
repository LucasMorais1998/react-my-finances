import { Item } from "../../@types/Item";

import { TableLine } from "./styles";

interface ITableItemProps {
  item: Item;
}

const TableItem = ({ item }: ITableItemProps) => {
  return (
    <TableLine>
      {}
    </TableLine>
  );
};

export default TableItem;
