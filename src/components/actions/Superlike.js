import React from 'react';

const SuperLike = ({ userId, modifySuperficialChoices }) => (
  <button
    type="button"
    className='button-icon'
    onClick={() => modifySuperficialChoices(userId, 'ADD_TO_SUPERLIKED_USERS')}
  >
    <img src="https://img.icons8.com/flat-round/64/star--v1.png" alt="Superlike User" />
  </button>
);

export default SuperLike;
