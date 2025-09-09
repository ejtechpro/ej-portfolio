import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";
import Services from "./pages/Services";
import Certifications from "./pages/Certifications";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import useTheme from "../../Alpha/client/src/store/useTheme";
import { useLayoutEffect } from "react";

function App() {
  const theme = useTheme((state) => state.theme);

  useLayoutEffect(() => {
    if (
      theme === "dark" ||
      (!theme && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <Routes>
      <Route path="ej-portfolio" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="skills" element={<Skills />} />
        <Route path="contact" element={<Contact />} />
        <Route path="projects" element={<Projects />} />
        <Route path="certifications" element={<Certifications />} />
      </Route>
      <Route path="downloads/*" />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
