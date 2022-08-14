import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  background-color: var(--white-color);
  padding: 1.25rem;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 0.625rem;
  margin-top: 1.25rem;
`;

interface TableHeadColumnProps {
  width?: number;
}

export const TableHeadColumn = styled.th<TableHeadColumnProps>`
  width: ${(props) => (props.width ? `${props.width}px` : "auto")};
  padding: 0.625rem 0;
  text-align: left;
`;
