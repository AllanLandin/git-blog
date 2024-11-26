import { FormContainer, FormTitle } from "./styles";

export function SearchPosts() {
  return (
    <div>
      <FormTitle>
        <h3>Publicações</h3>
        <span>6 publicações</span>
      </FormTitle>
      <FormContainer>
        <input type="text" placeholder="Buscar conteúdo"></input>
      </FormContainer>
    </div>
  );
}
