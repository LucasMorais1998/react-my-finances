import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--white-color);
  box-shadow: 0 0 5px #ccc;
  border-radius: 0.625rem;
  padding: 1.25rem;
  margin-top: -6.5rem;
  display: flex;
  align-items: center;
`;

export const MonthArea = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  .arrow-left-icon,
  .arrow-right-icon {
    font-size: 1.5rem;
    color: #111;
    cursor: pointer;
    transition: all ease 0.3s;

    &:hover {
      color: darkblue;
    }
  }
`

export const MonthTitle = styled.div`
  flex: 1;
  text-align: center;
`;

export const ResumeArea = styled.div`
  flex: 2;
  display: flex;
`;