import React, { useState } from 'react';
import Link from 'next/link';
import { push as Menu } from 'react-burger-menu';
import { Fade as Hamburger } from 'hamburger-react';
import { burgerMenu } from './burgerMenu.style';

export default function Test() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isOpen, setOpen] = useState(false);

  const isMenuOpen = (state) => {
    setMenuOpen(state.isOpen);
  };
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <Menu styles={burgerMenu}
        right
        pageWrapId={'page-wrap'}
        outerContainerId={'outer-container'}
        width={170}
        customBurgerIcon={false}
        isOpen={menuOpen}
        onStateChange={isMenuOpen}
      >
        <Link className="menu-item" href="/works">WORKS</Link>
        <Link className="menu-item" href="/news">NEWS</Link>
        <Link className="menu-item" href="/profile">PROFILE</Link>
        <Link className="menu-item" href="/contact">CONTACT</Link>
      </Menu>
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
