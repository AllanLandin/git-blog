import { useContext } from "react";
import { FormContainer, FormTitle } from "./styles";
import { postContext } from "../../contexts/PostsContext";

export function SearchPosts() {
  const { postsList } = useContext(postContext);

  return (
    <div>
      <FormTitle>
        <h3>Publicações</h3>
        <span>{postsList.length} publicações</span>
      </FormTitle>
      <FormContainer>
        <input type="text" placeholder="Buscar conteúdo"></input>
      </FormContainer>
    </div>
  );
}
