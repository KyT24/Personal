import { StrictMode, type ReactNode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "@fontsource-variable/inter";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "./context/ThemeContext";
import { ProjectsProvider } from "./context/ProjectsContext";

const TypedThemeProvider = ThemeProvider as (props: { children: ReactNode }) => ReactNode;
const TypedProjectsProvider = ProjectsProvider as (props: { children: ReactNode }) => ReactNode;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <TypedThemeProvider>
        <TypedProjectsProvider>
          <App />
        </TypedProjectsProvider>
      </TypedThemeProvider>
    </BrowserRouter>
  </StrictMode>
);