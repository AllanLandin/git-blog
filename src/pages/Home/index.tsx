import { Header } from "../../components/Header";
import { Post } from "../../components/Post";
import { Profile } from "../../components/Profile";
import { SearchPosts } from "../../components/SearchPosts";
import { HomeContainer, PostsContainer } from "./styles";

export function Home() {
  return (
    <div>
      <Header />
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
