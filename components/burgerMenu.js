import React, { useState } from 'react';
import Link from 'next/link';
import { Fade as Hamburger } from 'hamburger-react';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';


export default function Test({router}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isOpen, setOpen] = useState(false);

  const isMenuOpen = () => {
    setMenuOpen(isOpen);
  };
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <Drawer
        open={isOpen}
        onClose={isMenuOpen}
        direction='right'
        className='bla bla bla'
      >

        <div className="flex flex-col mt-28 pl-4">
          <Link href="/works" passHref>
            <a className={`${router.pathname == '/works' ? 'opacity-40' : ' '} p-4 text-base`}>WORKS</a></Link>
          <Link href="/profile">
            <a className={`${router.pathname == '/profile' ? 'opacity-40' : ' '} p-4 text-base`}>PROFILE</a>
          </Link>
          <Link href="/contact">
            <a className={`${router.pathname == '/contact' ? 'opacity-40' : ' '} p-4 text-base`}>CONTACT</a>
          </Link>
          <Link href="/news">
            <a className={`${router.pathname == '/news' ? 'opacity-40' : ' '} p-4 text-base`}>NEWS</a>
          </Link>
        </div>
      </Drawer>
      <button onClick={toggleMenu}
        className={` ${isOpen ? 'active' : ' '} hamburger
              block md:hidden" type="button`}>
        <Hamburger
          size={30}
          duration={1}
          distance="lg"
          toggled={isOpen} toggle={setOpen}
        />
      </button>
    </>
  );
}
