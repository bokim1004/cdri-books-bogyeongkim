type NavItems = {
  label: string;
  href: string;
};

type HeaderProps = {
  logoText?: string;
  navItems: NavItems[];
};

import { Link, useLocation } from "react-router-dom";
/**
 *
 * @param props - Header 컴포넌트의 props
 * @param props.logoText - 로고 텍스트
 * @param props.navItems - 네비게이션 아이템 배열
 * @param props.navItems.label - 네비게이션 아이템의 라벨
 * @param props.navItems.href - 네비게이션 아이템의 링크
 * @returns
 */
function Header(props: HeaderProps) {
  const { logoText, navItems } = props;
  const location = useLocation();

  return (
    <div className="relative flex items-center justify-between text-textPrimary ">
      <div className=" text-title1 font-bold">{logoText}</div>
      {navItems?.length > 0 ? (
        <nav className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  flex space-x-10">
          {navItems?.map((item) => {
            return (
              <Link
                key={item.href}
                to={item.href}
                className={`text-body1 font-medium hover:underline decoration-primary underline-offset-7 cursor-pointer ${
                  location.pathname === item.href
                    ? "border-b-2 border-primary"
                    : ""
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      ) : null}
    </div>
  );
}

export default Header;
