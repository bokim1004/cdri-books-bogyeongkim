type NavItems = {
  label: string;
  href: string;
};

type HeaderProps = {
  logoText?: string;
  navItems: NavItems[];
};

function Header({ logoText, navItems }: HeaderProps) {
  return (
    <div className="relative flex items-center justify-between text-textPrimary ">
      <div className=" text-title1 font-bold">{logoText}</div>
      {navItems?.length > 0 ? (
        <nav className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  flex space-x-10">
          {navItems?.map((item) => {
            return (
              <a
                key={item.href}
                href={item.href}
                className="text-body1 font-medium hover:underline decoration-primary underline-offset-7"
              >
                {item.label}
              </a>
            );
          })}
        </nav>
      ) : null}
    </div>
  );
}

export default Header;
