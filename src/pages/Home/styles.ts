import styled from "styled-components";

export const HomeContainer = styled.main`
  width: 100%;
  margin: 4rem auto 0;
  padding: 0 1.2rem;
  max-width: 900px;
`;

export const PostsContainer = styled.div`
  margin-top: 2.5rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-bottom: 2rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;
