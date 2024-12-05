import { ptBR } from "date-fns/locale";
import { IPost } from "../../contexts/PostsContext";
import { PostContainer, PostHeader } from "./styles";
import { formatDistance } from "date-fns";
import { useNavigate } from "react-router-dom";

interface IPostProps {
  postData: IPost;
}

export function Post({ postData }: IPostProps) {
  const navigate = useNavigate();

  return (
    <PostContainer
      onClick={() => {
        navigate(`/posts/${postData.id}`);
      }}
    >
      <PostHeader>
        <h3>{postData.title}</h3>
        <span>
          {formatDistance(postData.created_at, Date.now(), {
            addSuffix: true,
            locale: ptBR,
          })}
        </span>
      </PostHeader>
      <p>
        {String(postData.body).length < 250
          ? String(postData.body).slice(0, 250)
          : String(postData.body).slice(0, 250) + "..."}
      </p>
    </PostContainer>
  );
}
