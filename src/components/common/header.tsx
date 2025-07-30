function Header() {
  return (
    <div className="relative flex items-center justify-between ">
      <div className="text-textPrimary">CERTICOS BOOKS</div>
      <nav className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  flex space-x-4">
        <a href="/search" className="text-body2 hover:text-blue-600">
          Search
        </a>
        <a href="/about" className="text-body2 hover:text-primary">
          About
        </a>
      </nav>

      {/* 디버깅용 */}
      <div className="absolute top-16 left-0 p-2 bg-gray-100 text-xs space-y-1">
        <div className="text-red-500">기본 빨강</div>
        <div className="text-primary">커스텀 primary (파란색)</div>
        <div className="text-textPrimary">커스텀 textPrimary (다크그레이)</div>
        <div className="text-title1">title1 크기</div>
      </div>
    </div>
  );
}

export default Header;
