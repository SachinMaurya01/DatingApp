import React from 'react';

const Like = ({ userId, modifySuperficialChoices }) => (
  <button
    type="button"
    onClick={() => modifySuperficialChoices(userId, 'ADD_TO_LIKED_USERS')}
    className='button-icon'
  >
    <img src="https://img.icons8.com/fluency/48/love-circled.png" alt="Like User" />
  </button>
);

export default Like;
