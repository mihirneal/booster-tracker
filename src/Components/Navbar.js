import React from 'react';
import MenuItems from './Sub-components/MenuItems.js'
import SocialMedia from './Sub-components/SocialMedia.js';
import logo from '../Resources/booster-tracker-logo.png';

const menuToggler = () => {
    const hiddenMenu = document.querySelector('.menu');
    const primaryMenuButton = document.querySelector('.primary-menu-button');
    const secondaryMenuButton = document.querySelector('.secondary-menu-button');
    hiddenMenu.classList.toggle('hidden');
    primaryMenuButton.classList.toggle('hidden');
    secondaryMenuButton.classList.toggle('hidden');
}

const Navbar = () => {
  return (
  <div>
      <nav className="bg-gray-100">
          <div className="max-w-6xl mx-auto border px-4">
              <div className="flex justify-between">
                  {/* LOGO comes here */}
                  <div className="flex space-x-4"> {/*Hahaha space-x*/}
                    <a href="#" className="flex items-center py-1 px-2 text-gray-700">
                        <img src={logo} alt="Booster Tracker Logo" className="h-20 w-20 mr-1" />
                    </a>
                    {/* Primary Navigation */}
                    <div className="hidden md:flex items-center space-x-1">
                        <MenuItems />
                    </div>
                  </div>
                  {/* Social Media Links */}
                  <div className='hidden md:flex'>
                      <SocialMedia />
                  </div>
                  {/* Navigation Button */}
                  <div className="md:hidden flex items-center">
                    <button onClick={menuToggler}><svg className='primary-menu-button w-6 h-6' fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        <svg class="secondary-menu-button w-6 h-6 hidden" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </button>
                  </div>
              </div>
              {/* Mobile Navigation  */}
              <div className='menu hidden text-right md:hidden'>
                  <MenuItems menuClass={'block py-2 px-4 text-sm hover:bg-gray-200'}/>
              </div>
          </div>

      </nav>
  </div>);
};

export default Navbar;
