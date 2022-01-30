import React from 'react';
import PropTypes from 'prop-types';

const MenuItems = ({menuClass}) => {
  return(
      <div>
          <a href="" className={menuClass}>Boosters</a>
          <a href="" className={menuClass}>Fairings</a>
          <a href="" className={menuClass}>Spacecrafts</a>
          <a href="" className={menuClass}>Starship</a>
          <a href="" className={menuClass}>Next Launch</a>
      </div>
  );
};

MenuItems.defaultProps = {
    menuClass: 'py-3 px-2 text-gray-900',
}

MenuItems.propTypes = {
    menuClass: PropTypes.string,
}

export default MenuItems;
