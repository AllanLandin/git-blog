import { useContext } from "react";
import { Post } from "../../components/Post";
import { Profile } from "../../components/Profile";
import { SearchPosts } from "../../components/SearchPosts";
import { HomeContainer, PostsContainer } from "./styles";
import { postContext } from "../../contexts/PostsContext";

export function Home() {
  const { postsListFiltered } = useContext(postContext);

  return (
    <div>
      <HomeContainer>
        <Profile />
        <SearchPosts />

        <PostsContainer>
          {postsListFiltered.map((post) => {
            return <Post key={post.id} postData={post}></Post>;
          })}
        </PostsContainer>
      </HomeContainer>
    </div>
  );
}
