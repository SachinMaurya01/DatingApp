import React from 'react';
import Actions from './Actions';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import TinderCard from 'react-tinder-card';

const Person = ({ person, modifySuperficialChoices, goBack }) => {
  const { name, desc, age, image, location, id, gender } = person;

  return (
    <>
      {/* <TinderCard
     className='tinderCard'
     key={name}
     preventSwipe={['up', 'down']}
    > */}

      <div className="person">
        <div className='ArrowStyle'>
          <div> <KeyboardArrowLeftIcon style={{width:'40px', height:'40px', cursor:'pointer'}} onClick={() => { goBack(person.id) }}/></div>
          <div> <ChevronRightIcon style={{width:'40px', height:'40px', cursor:'pointer'}} onClick={() => modifySuperficialChoices(person.id, 'ADD_TO_DISLIKED_USERS')}/></div>

          {/* <img onClick={() => { goBack(person.id) }} style={{ height: '40px', width: '30px', padding: '0' }} src="https://img.icons8.com/metro/26/back.png" alt="circled-chevron-left" /> */}
          {/* <img onClick={() => modifySuperficialChoices(person.id, 'ADD_TO_DISLIKED_USERS')} style={{ height: '40px', width: '30px', padding: '0' }} src="https://img.icons8.com/ios/50/circled-chevron-right--v1.png" alt="circled-chevron-right--v1" /> */}
        </div>
        <div className="person-photo">
          <img src={`${image}`} alt={name} />
        </div>

        <div className="person-description">
          <p className="person-name-age">
            {name}, <span>{age}</span>
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'space-around' }}>
            <div className='Userdescription'>
              <img  style={{ height: '20px', width: '20px', padding: '0', margin:'0' }} src="https://img.icons8.com/ios-filled/50/place-marker--v1.png" alt="place-marker--v1" />
              <p className="person-info">{location}</p>
            </div>
            <div className='Userdescription'>
              <img style={{ height: '20px', width: '20px', padding: '0', margin:'0' }} src="https://img.icons8.com/material-rounded/24/user-male-circle.png" alt="user-male-circle" />
              <p className="person-info">{gender}</p>
            </div>
          </div>

        </div>
      </div>
      {/* </TinderCard> */}

      <Actions
        person={person}
        modifySuperficialChoices={modifySuperficialChoices}
      />
    </>
  );
};

export default Person;
