import { Link } from "react-router-dom";
import { HeaderContainer, ProfileContainer, StatsContainer } from "./styles";
import {
  ArrowSquareOut,
  Calendar,
  CaretLeft,
  ChatCircleDots,
  GithubLogo,
} from "phosphor-react";
import { IPost } from "../../contexts/PostsContext";
import { formatDistance } from "date-fns";
import { ptBR } from "date-fns/locale";

interface IPostHeaderProps {
  currentPost: IPost;
}

export function PostHeader({ currentPost }: IPostHeaderProps) {
  console.log(currentPost);
  return (
    <ProfileContainer>
      <HeaderContainer>
        <Link to="/">
          <CaretLeft />
          Voltar
        </Link>
        <Link to={currentPost.issue_link}>
          Ver no Github
          <ArrowSquareOut />
        </Link>
      </HeaderContainer>
      <h3>{currentPost.title}</h3>
      <StatsContainer>
        <span>
          <GithubLogo /> {currentPost.username}
        </span>
        <span>
          <Calendar />{" "}
          {formatDistance(currentPost.created_at, Date.now(), {
            addSuffix: true,
            locale: ptBR,
          })}
        </span>
        <span>
          <ChatCircleDots /> {currentPost.comments_amount} Comentários
        </span>
      </StatsContainer>
    </ProfileContainer>
  );
}
