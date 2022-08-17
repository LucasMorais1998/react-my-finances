import styled from "styled-components";

export const TableLine = styled.tr``;

export const TableColumn = styled.td`
  padding: 0.625rem 0;
`;

interface ITableCategoryProps {
  color: string;
}

interface ITabaleValue extends ITableCategoryProps {}

export const TableCategory = styled.div<ITableCategoryProps>`
  width: max-content;
  display: flex;
  justify-content: left;
  align-items: center;
  gap: .3rem;
  padding: 0.3rem 0.625rem;
  border-radius: 0.3rem;
  color: var(--white-color);
  background-color: ${(props) => props.color};
`;

export const TableValue = styled.div<ITabaleValue>`
  color: ${(props) => props.color};
  font-weight: 500;
`;
