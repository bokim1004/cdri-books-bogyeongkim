import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import "./App.css";
import Header from "./components/common/header";

import { lazy, Suspense } from "react";
const SearchPage = lazy(() => import("./pages/search-page"));
const FavoritePage = lazy(() => import("./pages/favorite-page"));

function App() {
  return (
    <Router>
      <Suspense
        fallback={
          <div className="flex justify-center items-center h-screen">
            로딩중...
          </div>
        }
      >
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
      </Suspense>
    </Router>
  );
}

export default App;
