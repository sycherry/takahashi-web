import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import BurgerMenu from '@components/burgerMenu.js';

export default function Layout({ children }) {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div id="outer-container" >
      <div className="md:hidden burger" >
        <BurgerMenu />
      </div>
      <div id="page-wrap">
        <div className={`mx-auto  ${router.pathname === '/' ? 'topPage' : null}`}>

          <header className={`mb-10 md:mb-20 g:mb-24 px-6 md:px-8 lg:px-10 pt-6 md:pt-8 lg:pt-10 mx-auto ${router.pathname === '/' ? null : 'max-w-screen-xl'}`}>
            <div className="flex w-full justify-between items-center">
              <div className="md:duration-500 md:hover:opacity-40">
                <Link href="/" passHref>
                  <a>
                    <p className="title-jp z-20 mt-1 md:mt-0">髙橋昌之建築設計事務所</p>
                    <p className="title-en mt-1 md:mt-0">MASAYUKI TAKAHASHI ARCHITECTS</p>

                  </a>
                </Link></div>

              <div className="hidden md:block flex items-center">
                <ul className="flex justify-end text-base">
                  <li className={`${router.pathname == '/works' ? 'opacity-40' : ' '} mr-10 hover:opacity-40 md:duration-500`}>
                    <Link href="/works">WORKS</Link></li>
                  <li className={`${router.pathname == '/profile' ? 'opacity-40' : ' '} mr-10 hover:opacity-40 md:duration-500`}>
                    <Link href="/profile">PROFILE </Link></li>
                  <li className={`${router.pathname == '/contact' ? 'opacity-40' : ' '} mr-10 hover:opacity-40 md:duration-500`}>
                    <Link href="/contact">CONTACT</Link></li>
                  <li className={`${router.pathname == '/news' ? 'opacity-40' : ' '} hover:opacity-40 md:duration-500`}>
                    <Link href="/news">NEWS</Link></li>
                </ul>
              </div>
            </div>

          </header>

          <main className="text-base">{children}</main>

          <footer className="py-6 md:py-8 lg:py-10 text-center">

            {router.pathname === '/' || !isVisible ? null :
              <svg onClick={scrollToTop}
                className=" inline-block mb-6 md:mb-8 lg:mb-10 text-gray-200
              md:duration-500 md:hover:opacity-40"
                fill="#444"
                aria-hidden="true"
                focusable="false"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 511.7 511.7"
                /* height="86" */
                height="45"
                width="150"
              >
                <path d="M369,382.7c-1.1,0-2.1-0.6-2.6-1.7L255.9,138.7L145.3,381c-0.6,1.4-2.3,2-3.8,1.4c-1.4-0.7-2.1-2.3-1.4-3.8l113.2-248
                c0.5-1,1.5-1.7,2.6-1.7l0,0c1.1,0,2.1,0.6,2.6,1.7l113.1,248c0.6,1.4,0,3.1-1.4,3.8C369.8,382.6,369.4,382.7,369,382.7z"/>
              </svg>}
            <p className="text-2xs font-light">
              &copy; 2022 <Link href={`/`}>
                MASAYUKI TAKAHASHI ARCHITECTS
              </Link></p>
          </footer>
        </div>
      </div>
    </div>
  );
}
