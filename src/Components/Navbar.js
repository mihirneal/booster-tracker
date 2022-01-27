import React from 'react';
import logo from '../Resources/booster-tracker-logo.png';

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
                        <a href="" className="py-4 px-3 hover: text-gray-900">Boosters</a>
                        <a href="" className="py-4 px-3 hover: text-gray-900">Fairings</a>
                        <a href="" className="py-4 px-3 hover: text-gray-900">Spacecrafts</a>
                        <a href="" className="py-4 px-3 hover: text-gray-900">Starship</a>
                        <a href="" className="py-4 px-3 hover: text-gray-900">Next Launch</a>
                    </div>
                  </div>
                  {/* Social Media Links */}
                  <div className="hidden md:flex items-center space-x-1">
                      <a href="" className="py-1 px-1"><img className='h-6 w-6' src="https://img.icons8.com/color/480/000000/patreon.png"/></a>
                      <span> | </span>
                      <a href="" className="py-1 px-1"><img className='h-6 w-6' src="https://img.icons8.com/color/480/000000/twitter--v1.png"/></a>
                      <span> | </span>
                      <a href="" className="py-1 px-1"><img className='h-6 w-6' src="https://img.icons8.com/fluency/480/000000/instagram-new.png"/></a>
                  </div>
                  {/* Navigation Button */}
                  <div className="md:hidden flex items-center">
                    <button onClick={() => {console.log("Button was clicked");}}><svg className='primary-menu-button w-6 h-6' fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        <svg class="secondary-menu-button w-6 h-6 hidden" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </button>
                  </div>
              </div>
          </div>

      </nav>
  </div>);
};

export default Navbar;
