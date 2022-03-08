import React from 'react'

const Header = ({user}) => {
  return (
    <div id="header">
        <h3>Welcome {user.name}!</h3>
        <h1>HighScores Tracker 🎮</h1>
        <h3>Email: {user.email}</h3>
    </div>
  )
}

export default Header