import React from 'react';
import PropTypes from 'prop-types';

const SocialMedia = ({SocialMediaClass}) => {
  return (
      <div className={SocialMediaClass}>
          <a href="" className="py-1 px-1"><img className='h-6 w-6' src="https://img.icons8.com/color/480/000000/patreon.png"/></a>
          <span> | </span>
          <a href="" className="py-1 px-1"><img className='h-6 w-6' src="https://img.icons8.com/color/480/000000/twitter--v1.png"/></a>
          <span> | </span>
          <a href="" className="py-1 px-1"><img className='h-6 w-6' src="https://img.icons8.com/fluency/480/000000/instagram-new.png"/></a>
      </div>
  );
};

SocialMedia.defaultProps = {
    SocialMediaClass: 'flex items-center space-x-2',
}

SocialMedia.propType = {
    SocialMediaClass: PropTypes.string,
}

export default SocialMedia;
