function Header() {
  return (
    <div className="relative flex items-center justify-between text-textPrimary ">
      <div className=" text-title1 font-bold">CERTICOS BOOKS</div>
      <nav className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  flex space-x-10">
        <a
          href="/search"
          className="text-body1 font-medium hover:underline decoration-primary underline-offset-7"
        >
          도서 검색
        </a>
        <a
          href="/favorites"
          className="text-body1 font-medium hover:underline decoration-primary underline-offset-7"
        >
          내가 찜한 책
        </a>
      </nav>
    </div>
  );
}

export default Header;
