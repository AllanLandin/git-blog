import styled from "styled-components";

export const FormTitle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  margin-bottom: 0.8rem;

  h3 {
    color: ${(props) => props.theme["baseSubtitle"]};
  }

  span {
    font-size: 0.8rem;
    color: ${(props) => props.theme["baseSpan"]};
  }
`;

export const FormContainer = styled.form`
  display: flex;
  gap: 1.5rem;

  input {
    width: 100%;
    padding: 0.5rem;
    border-radius: 6px;
    border: 1px solid ${(props) => props.theme["baseBorder"]};
    background-color: transparent;
    color: ${(props) => props.theme["baseText"]};
  }

  input::placeholder {
    color: ${(props) => props.theme["baseSpan"]};
  }
`;

export const SearchBtn = styled.button`
  background-color: transparent;
  border: 0;

  svg {
    color: white;
    font-size: 1.5rem;
  }

  svg:hover {
    color: ${(props) => props.theme["blue"]};
    cursor: pointer;
    transition: 0.3s;
  }
`;
