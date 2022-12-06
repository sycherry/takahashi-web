import React, { useState } from 'react';
import Link from 'next/link';
import { Fade as Hamburger } from 'hamburger-react';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';


export default function Test() {
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
          <p className="block pb-4 text-base"><Link href="/works">WORKS</Link></p>
          <p className="block pb-4 text-base"><Link href="/profile">PROFILE</Link></p>
          <p className="block pb-4 text-base"><Link href="/contact">CONTACT</Link></p>
          <p className="block pb-4 text-base"><Link href="/news">NEWS</Link></p>
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
