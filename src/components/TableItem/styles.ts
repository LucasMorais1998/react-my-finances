import styled from "styled-components";

export const TableLine = styled.tr``;

export const TableColumn = styled.td`
  padding: 0.625rem 0;
`;

interface ITableCategoryProps {
  color: string;
}

interface ITableValueProps extends ITableCategoryProps {}

export const TableCategory = styled.div<ITableCategoryProps>`
  width: max-content;
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 0.3rem;
  padding: 0.3rem 0.625rem;
  border-radius: 0.3rem;
  color: var(--white-color);
  background-color: ${(props) => props.color};
`;

export const TableValue = styled.div<ITableValueProps>`
  color: ${(props) => props.color};
  font-weight: 500;

  .table-value-icon {
    color: ${(props) => props.color};
    margin-right: 0.3rem;
    font-size: 0.6rem;
  }
`;
