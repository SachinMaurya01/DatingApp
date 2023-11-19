import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Person from './components/Person';
import Lonely from './components/Lonely';
import data from './data.json';
import { Modal } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [people, setPeople] = useState(data);
  const [likedUsers, setLikedUsers] = useState([]);
  const [superLikedUsers, setSuperLikedUsers] = useState([]);
  const [dislikedUsers, setDislikedUsers] = useState([]);
  const [OpenModal, setOpenModal] = useState(false);
  const [Modaldata, setModaldata] = useState([]);
  const [SuperMatch, setSuperMatch] = useState(false);

  // let Modaldata = [];
  const Totalentry = data;
  const activeUser = 0;

  const removedPersonFromDataSrc = (peopleSource, userId) =>
    peopleSource.filter(user => user.id !== userId);

  const modifySuperficialChoices = (userId, action) => {
    const newPeople = [...people];
    const newLikedUsers = [...likedUsers];
    const newSuperLikedUsers = [...superLikedUsers];
    const newDislikedUsers = [...dislikedUsers];

    switch (action) {
      case 'ADD_TO_LIKED_USERS':
        if (!people[activeUser].likedUsers.includes(userId)) {
          newPeople[activeUser].likedUsers.push(userId);
          newLikedUsers.push(data[userId]);
          setSuperMatch(false);
          // Modaldata = data[userId];
          setModaldata(data[userId])
          // console.log(Modaldata);

          setOpenModal(true);
          let dislikes = [...dislikedUsers];
          dislikes = dislikes.filter((user) => user.id != userId)
          setDislikedUsers(dislikes);

          let superlk = [...superLikedUsers];
          superlk = superlk.filter((user) => user.id != userId)
          setSuperLikedUsers(superlk);

          setLikedUsers(newLikedUsers);
          setPeople(removedPersonFromDataSrc(people, userId));
        } else {
          setPeople(removedPersonFromDataSrc(people, userId));
        }
        break;
      case 'ADD_TO_DISLIKED_USERS':
        if (!people[activeUser].dislikedUsers.includes(userId)) {
          newPeople[activeUser].dislikedUsers.push(userId);
          newDislikedUsers.push(data[userId]);

          let lk = [...likedUsers];
          lk = lk.filter((user) => user.id != userId)
          setLikedUsers(lk);

          let superlk = [...superLikedUsers];
          superlk = superlk.filter((user) => user.id != userId)
          setSuperLikedUsers(superlk);

          setDislikedUsers(newLikedUsers);
          setPeople(removedPersonFromDataSrc(people, userId));
        }
        else {
          setPeople(removedPersonFromDataSrc(people, userId));
        }
        break;
      case 'ADD_TO_SUPERLIKED_USERS':
        if (!people[activeUser].superLikedUsers.includes(userId)) {
          newPeople[activeUser].superLikedUsers.push(userId);
          newSuperLikedUsers.push(data[userId]);

          setSuperMatch(true);
          setModaldata(data[userId])
          setOpenModal(true);

          let lk = [...likedUsers];
          lk = lk.filter((user) => user.id != userId)
          setLikedUsers(lk);

          let dislikes = [...dislikedUsers];
          dislikes = dislikes.filter((user) => user.id != userId)
          setDislikedUsers(dislikes);

          setSuperLikedUsers(newSuperLikedUsers);
          setPeople(removedPersonFromDataSrc(people, userId));
        }
        else {
          setPeople(removedPersonFromDataSrc(people, userId));
        }
        break;

      default:
        return people;
    }
  };

  const goBack = (userId) => {
    // console.log(userId)
    if (people.length != Totalentry.length) {
      const userdata = [...Totalentry].filter(col => col.id == userId - 1)
      let totaldata = [...people, userdata[0]]
      // prevVisitedUsers => [...prevVisitedUsers, activeUser]
      totaldata = totaldata.sort((a, b) => a.id - b.id);
      setPeople(totaldata);

    }
  };

  return (
    <>

      <div className="app">
        <Header />
        {people[1] ? (
          <Person
            key={people[1].id}
            person={people[1]}
            modifySuperficialChoices={modifySuperficialChoices}
            likedUsers={likedUsers}
            goBack={goBack}
          />
        ) : (
          <Lonely
            activeUserImage={people[activeUser].image}
            likedUsers={likedUsers}
            superLikedUsers={superLikedUsers}
          />
        )}
      </div>

      <Modal id="documentmodal" centered animation={true} show={OpenModal} style={{ backgroundColor: 'rgba(0, 0, 0, 0.9)' }}>
        {/* <Modal.Header closeButton>
          <Modal.Title>Approval Form</Modal.Title>
        </Modal.Header> */}
        <Modal.Body>
          <div class="row" style={{ width: '95%', margin: 'auto' }}>
            <div style={{ textAlign: 'center' }} className='Navheader'>
              {
                SuperMatch ?
                  <span><b style={{ color: 'black' }}>I</b>t's a <b style={{ color: 'black' }}>S</b>uper <b style={{ color: 'black' }}>M</b>atch</span>
                  :
                  <span><b style={{ color: 'black' }}>I</b>t's a <b style={{ color: 'black' }}>M</b>atch</span>

              }
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '30px' }}>
              <div>
                <img src={people[0].image} alt="UserImage" style={{ width: '100px', height: '100px', borderRadius: '50%' }}></img>
              </div>

              <div>
                <img src={Modaldata.image} alt="MatchImage" style={{ width: '100px', height: '100px', borderRadius: '50%' }}></img>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
              <button style={{ padding: '5px 40px', background: '#a70606', color: 'white', borderRadius: '5px 15px' }} onClick={() => { setOpenModal(false) }}>Ok</button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>

  );
};

export default App;
