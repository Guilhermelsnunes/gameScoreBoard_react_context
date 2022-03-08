import React, {useState} from 'react'
import FormContainer from './FormContainer'
import Header from '../components/Header'
import ScoresContainer from './ScoresContainer'
import UserContext from '../context/UserContext'

const MainContainer = () => {

    const [user, setUser] = useState({
        name: "Billy Mitchell",
        email: "billy@twingalaxies.com",
        scores: [
            {"Donkey Kong": 874300},
            {"Pac-Man":  3333360},
            {"Ms. Pac-Man": 703560}
        ]
    })


  return (
    <>
        <Header user={user} />
          <div id="main-container">
            <UserContext.Provider value={{user, setUser}}>
              <ScoresContainer  />
              <FormContainer />
            </UserContext.Provider>

          </div>
    </>
  )
}

export default MainContainer