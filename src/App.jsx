import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyles from "./assets/Styles/GlobalStyle";
import HomePage from "./pages/HomePage/HomePage";

import ProjectsDetailPage from "./pages/ProjectsDetailPage/ProjectsDetailPage";
import { PortfolioProvider } from "./context/portfolioContext";

const App = () => {
  return (
    <>
      <PortfolioProvider>
        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route path="/:modal?" element={<HomePage />} />
            <Route
              path="/project-detail/:projectId"
              element={<ProjectsDetailPage />}
            />
            {/* <Route path="*" element={<NotFoundPage />} /> */}
          </Routes>
        </BrowserRouter>
      </PortfolioProvider>
    </>
  );
};

export default App;
