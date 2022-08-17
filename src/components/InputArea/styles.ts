import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--white-color);
  box-shadow: 0 0 5px #ccc;
  border-radius: 0.625rem;
  padding: 1.25rem;
  margin-top: 1.25rem;

  form {
    display: flex;
    justify-content: left;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.55rem;

    label {
      font-weight: 600;

      input,
      select,
      option {
        margin-left: 0.3rem;
        padding: 0.2rem;
        font-size: 0.9rem;
        font-weight: 500;
      }

      input,
      select {
        border: none;
        border: 1px solid #000;
        border-radius: 0.3rem;
      }

      input[id="date"] {
        width: 7.5rem;
      }

      input[id="title"] {
        width: 12rem;
      }

      input[id="value"] {
        width: 6.5rem;
      }

      option {
        font-weight: 500;
      }

      option[disabled] {
        font-weight: 400;
        color: rgba(0, 0, 0, 0.1);
      }
    }

    input[type="submit"] {
      width: 5rem;
      height: 1.75rem;
      border: none;
      border-radius: 0.3rem;
      font-weight: bold;
      color: var(--white-color);
      background-color: var(--darkblue-color);
      cursor: pointer;
      opacity: 0.8;
      transition: opacity ease 0.2s;
    }

    input[type="submit"]:hover {
      opacity: 1;
      
    }
  }
`;
