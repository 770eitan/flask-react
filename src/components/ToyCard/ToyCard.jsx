import { Link } from 'react-router-dom'
import { hexToRGBA } from './Utils'

const ToyCard = ({ toy, isCard }) => {
  const cardStyle = {
    borderColor: `${toy.color}`,
    backgroundColor: toy.color && hexToRGBA(toy.color)
  }

  return (
    <Link to={`/toys/${toy.id}`} className="toy-card" style={cardStyle}>
      {isCard && <><h2>{toy.name}</h2><p>{toy.description}</p></>}
    </Link>
  )
}

export default ToyCard