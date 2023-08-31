import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyles from "./assets/Styles/GlobalStyle";
import HomePage from "./pages/HomePage/HomePage";

import ProjectsDetailPage from "./pages/ProjectsDetailPage/ProjectsDetailPage";
import { PortfolioProvider } from "./context/portfolioContext";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import BioPage from "./pages/BioPage/BioPage";

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

const App = () => {
  return (
    <>
      <PortfolioProvider>
        <GlobalStyles />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/:modal?" element={<HomePage />} />
            <Route
              path="/project-detail/:projectId"
              element={<ProjectsDetailPage />}
            />
            <Route path="/cv" element={<BioPage />} />

            {/* <Route path="*" element={<NotFoundPage />} /> */}
          </Routes>
        </BrowserRouter>
      </PortfolioProvider>
    </>
  );
};

export default App;
