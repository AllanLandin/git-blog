import styled from "styled-components";

export const PostContainer = styled.div`
  background-color: ${(props) => props.theme["basePost"]};
  border-radius: 8px;
  padding: 2rem;
  border: 1px solid transparent;

  p {
    color: ${(props) => props.theme["baseText"]};
    font-size: 0.9rem;
  }

  &:hover {
    border-color: ${(props) => props.theme["baseSpan"]};
    transition: 0.2s;
  }
`;

export const PostHeader = styled.div`
  display: flex;
  align-items: start;
  margin-bottom: 1.75rem;
  h3 {
    color: ${(props) => props.theme["baseSubtitle"]};
    flex: 1;
  }
  span {
    font-size: 0.8rem;
    color: ${(props) => props.theme["baseSpan"]};
  }
`;
