import { ptBR } from "date-fns/locale";
import { IPost } from "../../contexts/PostsContext";
import { PostContainer, PostHeader } from "./styles";
import { formatDistance } from "date-fns";
import Markdown from "react-markdown";

interface IPostProps {
  postData: IPost;
}

export function Post({ postData }: IPostProps) {
  return (
    <PostContainer>
      <PostHeader>
        <h3>{postData.title}</h3>
        <span>
          {formatDistance(postData.created_at, Date.now(), {
            addSuffix: true,
            locale: ptBR,
          })}
        </span>
      </PostHeader>
      <Markdown>{postData.body}</Markdown>
    </PostContainer>
  );
}
