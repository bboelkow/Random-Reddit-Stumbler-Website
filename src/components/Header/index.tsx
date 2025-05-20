"use client";
import Image from "next/image";
import Link from "next/link";
import ThemeToggler from "./ThemeToggler";

const Header = () => {
  return (
    <header className="header top-0 left-0 z-40 flex w-full items-center absolute bg-transparent">
      <div className="container">
        <div className="relative -mx-4 flex items-center justify-between">
          {/* Logo */}
          <div className="w-[640px] max-w-full px-4 xl:mr-12">
            <Link href="/" className="header-logo block w-full py-8">
              <Image
                src="/images/logo/RRS Web Logo BEST 1.svg"
                alt="logo"
                width={640}
                height={128}
                className="dark:hidden"
              />
              <Image
                src="/images/logo/RRS Web Logo BEST 1.svg"
                alt="logo"
                width={640}
                height={128}
                className="hidden dark:block"
              />
            </Link>
          </div>
          {/* Theme Toggler */}
          <div>
            <ThemeToggler />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
