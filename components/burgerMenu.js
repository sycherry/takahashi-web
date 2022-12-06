import React, { useState } from 'react';
import Link from 'next/link';
// import { push as Menu } from 'react-burger-menu';
import { Fade as Hamburger } from 'hamburger-react';
// import { burgerMenu } from './burgerMenu.style';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';


export default function Test() {
  const [menuOpen, setMenuOpen] = useState(false);
  // const [isOpen, setOpen] = useState(false);

  const isMenuOpen = (state) => {
    setMenuOpen(state.isOpen);
  };
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction='right'
        className='bla bla bla'
      >

        <div className="flex flex-col mt-36 pl-4">
          <Link className="inline-block pb-4" href="/works">WORKS</Link>
          <Link className="inline-block pb-4" href="/profile">PROFILE</Link>
          <Link className="inline-block pb-4" href="/contact">CONTACT</Link>
          <Link className="inline-block pb-4" href="/news">NEWS</Link>
        </div>
      </Drawer>


      <button onClick={toggleDrawer}
      className={` ${isOpen ? 'active' : ' '} hamburger
            block md:hidden" type="button`}>
              <p>test</p>
        <Hamburger
          size={30}
          duration={1}
          distance="lg"
          toggled={isOpen} toggle={setIsOpen}
        />
      </button>

      {/* <button onClick={toggleMenu}
        className={` ${isOpen ? 'active' : ' '} hamburger
              block md:hidden" type="button`}>
        <Hamburger
          size={30}
          duration={1}
          distance="lg"
          toggled={isOpen} toggle={setOpen}
        />
      </button> */}
    </>
  );
}
