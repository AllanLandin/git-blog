import { useContext, useEffect, useState } from "react";
import { PostHeader } from "../../components/PostHeader";
import { PostPageContainer } from "./styles";
import { IPost, postContext } from "../../contexts/PostsContext";
import { useParams } from "react-router-dom";
import Markdown from "react-markdown";

export function PostPage() {
  const { postsList } = useContext(postContext);
  const { id } = useParams();
  const [currentPost, setCurrentPost] = useState<IPost | undefined>({
    id: 0,
    username: "",
    issue_link: "",
    title: "",
    body: "",
    created_at: new Date(),
    comments_amount: 0,
  });

  useEffect(() => {
    setCurrentPost(
      postsList.find((post) => {
        return String(post.id) === id;
      })
    );
  });

  return (
    <PostPageContainer>
      {currentPost && (
        <PostPageContainer>
          <PostHeader currentPost={currentPost} />
          <Markdown>{currentPost.body}</Markdown>
        </PostPageContainer>
      )}
    </PostPageContainer>
  );
}
