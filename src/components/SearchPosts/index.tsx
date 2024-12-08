import { useContext } from "react";
import { FormContainer, FormTitle, SearchBtn } from "./styles";
import { postContext } from "../../contexts/PostsContext";
import * as zod from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MagnifyingGlass } from "phosphor-react";

export function SearchPosts() {
  const { postsListFiltered, filterPosts } = useContext(postContext);

  const searchSchema = zod.object({
    q: zod.string(),
  });

  type searchSchemaType = zod.infer<typeof searchSchema>;

  const { register, handleSubmit } = useForm<searchSchemaType>({
    resolver: zodResolver(searchSchema),
  });

  async function searchForPosts(data: searchSchemaType) {
    await filterPosts(data.q, "allanLandin/git-blog");
  }

  return (
    <div>
      <FormTitle>
        <h3>Publicações</h3>
        <span>{postsListFiltered.length} publicações</span>
      </FormTitle>
      <FormContainer onSubmit={handleSubmit(searchForPosts)}>
        <input
          type="text"
          placeholder="Buscar conteúdo"
          {...register("q")}
        ></input>
        <SearchBtn>
          <MagnifyingGlass type="submit" />
        </SearchBtn>
      </FormContainer>
    </div>
  );
}
