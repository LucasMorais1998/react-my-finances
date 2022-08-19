import styled from "styled-components";

export const Container = styled.header`
  height: 30vh;
  background-color: var(--darkblue-color);
  text-align: center;
  padding-bottom: 4rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  h1 {
    color: var(--white-color);
  }

  .header-title-icon {
    color: var(--white-color);
    font-size: 1.5rem;
    margin-top: 0.7rem;
  }
`;
