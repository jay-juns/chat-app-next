import React from 'react';
import Link from "next/link"
import { useRouter } from "next/router";

type toggleProps = {
  children: React.ReactNode;
}

const Header = ({ children }: toggleProps) => {
  const router = useRouter();

  return (
    <header>
      {children}
      <nav>
        <ul>
          <li className={router.asPath === "/" ? "active" : ""}>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li className={router.asPath === "/about" ? "active" : ""}>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li className={router.asPath === "/contents" ? "active" : ""}>
            <Link href="/contents">
              <a>Contents</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;