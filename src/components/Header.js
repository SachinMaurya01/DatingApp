import React from 'react';
// import Logo from './Logo';

const Header = () => (
  <header>
    <div className="fl">
      <button type="button">
      <img width="15" height="30" src="https://img.icons8.com/ios-filled/50/menu.png" alt="menu"/>
        {/* <img src="https://img.icons8.com/ios-glyphs/60/000000/user--v1.png" alt="User Settings" /> */}
      </button>
    </div>

    <div className="fl">
      <span className='Navheader'>
       <b style={{color:'black'}}>W</b>e<b style={{color:'black'}}>M</b>ate
      </span>
      {/* <span className='Navheader'> </span> */}
    </div>

    <div className="fl">
      <button type="button">
        {/* <img src="https://img.icons8.com/ios-filled/50/login-rounded-right.png" alt="Log out" /> */}
        <span className='UserDP'><img src="1.jpg" alt="User Settings" className='Userimage'/></span>
      
      </button>
    </div>
  </header>
);

export default Header;
