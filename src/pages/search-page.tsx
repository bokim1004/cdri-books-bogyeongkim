import Header from "../components/common/header";

function SearchPage() {
  return (
    <div className="flex flex-col items-base justify-baseline h-screen font-display">
      <Header
        logoText="CERTICOS"
        navItems={[
          { label: "도서 검색", href: "/search" },
          { label: "내가 찜한 책", href: "/favorites" },
        ]}
      />
    </div>
  );
}

export default SearchPage;
