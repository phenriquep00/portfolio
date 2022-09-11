import { ThemeProvider } from "./hooks/ThemeContext";
import { HomePage } from "./pages/HomePage/HomePage";

export function App() {

  return (
    <ThemeProvider initialTheme={''}>
      <HomePage />
    </ThemeProvider>

  )
}