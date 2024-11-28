import { Post } from "../../components/Post";
import { Profile } from "../../components/Profile";
import { SearchPosts } from "../../components/SearchPosts";
import { HomeContainer, PostsContainer } from "./styles";

export function Home() {
  return (
    <div>
      <HomeContainer>
        <Profile />
        <SearchPosts />

        <PostsContainer>
          <Post />
          <Post />
          <Post />
        </PostsContainer>
      </HomeContainer>
    </div>
  );
}
