import React from 'react';

const Rewind = () => (
  <button type="button" className='button-icon' onClick={()=>{window.location.reload()}}>
    <img src="https://img.icons8.com/offices/30/refresh.png" alt="Rewind User" />
  </button>
);

export default Rewind;
