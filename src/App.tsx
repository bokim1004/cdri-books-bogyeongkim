import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import "./App.css";
import Header from "./components/common/header";
import FavoritePage from "./pages/favorite-page";
import SearchPage from "./pages/search-page";

function App() {
  return (
    <Router>
      <Header
        logoText="CERTICOS BOOKS"
        navItems={[
          { label: "도서 검색", href: "/search" },
          { label: "내가 찜한 책", href: "/liked" },
        ]}
      />
      <Routes>
        <Route path="/" element={<Navigate to="/search" replace />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/liked" element={<FavoritePage />} />
      </Routes>
    </Router>
  );
}

export default App;
