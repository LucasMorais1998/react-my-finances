import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
`;

export const ResumeItemTitle = styled.div`
  text-align: center;
  font-weight: bold;
  color: var(--darkblue-color);
  margin-bottom: 0.375rem;
`;

interface IResumeItemInfoProps {
  color?: string;
}

export const ResumeItemInfo = styled.div<IResumeItemInfoProps>`
  text-align: center;
  font-weight: 500;
  color: ${(props) => props.color ?? "#000"};
`;
