import styled from "styled-components";

export const ProfileContainer = styled.div`
  display: flex;
  gap: 2rem;
  padding: 2.5rem;
  background-color: ${(props) => props.theme["baseProfile"]};
  border-radius: 8px;
  margin-top: -160px;

  img {
    width: 9rem;
    border-radius: 8px;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  justify-content: space-between;
`;

export const NameContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    color: ${(props) => props.theme["baseTitle"]};
  }

  span {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    color: ${(props) => props.theme["blue"]};
    font-weight: bold;
    text-transform: uppercase;
    font-size: 0.75rem;
    border-bottom: 1px solid transparent;
  }

  span:hover {
    border-color: ${(props) => props.theme["blue"]};
    transition: 0.2s;
  }
`;

export const SocialsContainer = styled.div`
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
