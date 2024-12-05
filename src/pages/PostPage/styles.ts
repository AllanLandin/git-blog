import styled from "styled-components";

export const PostPageContainer = styled.main`
  width: 100%;
  margin: 4rem auto 0;
  padding: 0 1.2rem;
  max-width: 900px;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  p {
    font-size: 1rem;
  }

  img {
    max-width: 100%;
    object-fit: contain;
  }
`;
