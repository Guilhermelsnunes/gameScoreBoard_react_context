import React from 'react'

const ScoresListItem = ({game}) => {

  const nameKey = Object.keys(game)[0]

  return (
    <li>
      <span><b>{nameKey} </b></span>
      <span>  High Score: {game[nameKey]}</span>
    </li>

  )
}

export default ScoresListItem