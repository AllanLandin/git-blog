import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/defaultTheme";
import { GlobalStyle } from "./styles/global.style";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { PostContextProvider } from "./contexts/PostsContext";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <PostContextProvider>
          <Router />
        </PostContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}
