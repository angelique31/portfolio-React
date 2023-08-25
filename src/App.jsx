import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyles from "./assets/Styles/GlobalStyle";
import HomePage from "./pages/HomePage/HomePage";

import ProjectsDetailPage from "./pages/ProjectsDetailPage/ProjectsDetailPage";
import { PortfolioProvider } from "./context/portfolioContext";
import CvPage from "./pages/CvPage/CvPage";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

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
            <Route path="/cv" element={<CvPage />} />

            {/* <Route path="*" element={<NotFoundPage />} /> */}
          </Routes>
        </BrowserRouter>
      </PortfolioProvider>
    </>
  );
};

export default App;
