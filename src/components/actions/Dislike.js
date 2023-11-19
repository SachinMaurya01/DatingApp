import React from 'react';

const Dislike = ({ userId, modifySuperficialChoices }) => (
  <button
    type="button"
    className='button-icon'
    onClick={() => modifySuperficialChoices(userId, 'ADD_TO_DISLIKED_USERS')}
  >
    <img src="https://img.icons8.com/cute-clipart/64/delete-sign.png"  alt="Dislike User" />
  </button>
);

export default Dislike;
