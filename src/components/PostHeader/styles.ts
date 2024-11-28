import styled from "styled-components";

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2.5rem;
  background-color: ${(props) => props.theme["baseProfile"]};
  border-radius: 8px;
  margin-top: -160px;

  img {
    width: 9rem;
    border-radius: 8px;
  }

  h3 {
    font-size: 1.5rem;
    color: ${(props) => props.theme["baseSubtitle"]};
  }
`;

export const StatsContainer = styled.div`
  display: flex;
  gap: 1rem;

  span {
    font-size: 0.9rem;
    color: ${(props) => props.theme["baseSpan"]};
    display: flex;
    align-items: center;
    gap: 0.2rem;
  }

  span:hover {
    color: ${(props) => props.theme["baseText"]};
    transition: 0.2s;
  }
`;

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${(props) => props.theme["blue"]};
    font-weight: bold;
    text-transform: uppercase;
    border-bottom: 1px solid transparent;
    text-decoration: none;
  }

  a:hover {
    border-color: ${(props) => props.theme["blue"]};
    transition: 0.2s;
  }
`;
