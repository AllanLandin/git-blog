import styled from "styled-components";

export const PostContainer = styled.div`
  background-color: ${(props) => props.theme["basePost"]};
  border-radius: 8px;
  padding: 2rem;

  p {
    color: ${(props) => props.theme["baseText"]};
    font-size: 0.9rem;
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
