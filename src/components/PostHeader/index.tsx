import { Link } from "react-router-dom";
import { HeaderContainer, ProfileContainer, StatsContainer } from "./styles";
import {
  ArrowSquareOut,
  Calendar,
  CaretLeft,
  ChatCircleDots,
  GithubLogo,
} from "phosphor-react";

export function PostHeader() {
  return (
    <ProfileContainer>
      <HeaderContainer>
        <Link to="/">
          <CaretLeft />
          Voltar
        </Link>
        <Link to="/">
          Ver no Github
          <ArrowSquareOut />
        </Link>
      </HeaderContainer>
      <h3>JavaScript data types and data structures</h3>
      <StatsContainer>
        <span>
          <GithubLogo /> cameronwll
        </span>
        <span>
          <Calendar /> Há 1 dia
        </span>
        <span>
          <ChatCircleDots /> 5 Comentários
        </span>
      </StatsContainer>
    </ProfileContainer>
  );
}
