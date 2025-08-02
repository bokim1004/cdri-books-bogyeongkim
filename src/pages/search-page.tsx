import Header from "../components/common/header";
import BookInfo from "../components/search/book-info";
import BookSearch from "../components/search/book-search";
import { useBookSearch } from "../hooks/useBookSearch";
import { useSearchStore } from "../store/useSearchStore";

function SearchPage() {
  const { query } = useSearchStore();
  const { data } = useBookSearch(query);

  return (
    <div className="flex flex-col  h-screen font-display">
      <Header
        logoText="CERTICOS BOOKS"
        navItems={[
          { label: "도서 검색", href: "/search" },
          { label: "내가 찜한 책", href: "/favorites" },
        ]}
      />
      <div className=" flex flex-col  mt-20 mx-auto  ">
        <BookSearch data={data} />
        <BookInfo data={data} />
      </div>
    </div>
  );
}

export default SearchPage;
