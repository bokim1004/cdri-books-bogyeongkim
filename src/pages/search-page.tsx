import Header from "../components/common/header";
import BookSearch from "../components/search/book-search";
import NoSearchView from "../components/search/no-searchview";

function SearchPage() {
  return (
    <div className="flex flex-col h-screen font-display">
      <Header
        logoText="CERTICOS"
        navItems={[
          { label: "도서 검색", href: "/search" },
          { label: "내가 찜한 책", href: "/favorites" },
        ]}
      />
      <div className=" flex flex-col justify-center mt-20 gap-30">
        <BookSearch />
        <NoSearchView />
      </div>
    </div>
  );
}

export default SearchPage;
