import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/defaultTheme";
import { GlobalStyle } from "./styles/global.style";
import { Home } from "./pages/Home";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <Home />
    </ThemeProvider>
  );
}