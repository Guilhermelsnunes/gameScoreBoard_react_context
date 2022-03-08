import React, {useContext} from 'react'
import ScoresListItem from './ScoresListItem'
import UserContext from '../context/UserContext'


const ScoresList = () => {

  const {user} = useContext(UserContext)

    const scoreListNodes = user.scores.map((game, index) => {
        return <ScoresListItem key={index} game={game} />
    })


  return (
    <ul>
      {scoreListNodes}
    </ul>
  )
}

export default ScoresList