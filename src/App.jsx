import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyles from "./assets/Styles/GlobalStyle";
import HomePage from "./pages/HomePage/HomePage";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />

          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
