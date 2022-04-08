import { Link } from 'react-router-dom'

const CatCard = ({ cat, catImages }) => {
  const ageString = cat.age > 0
    ? `A ${cat.age} year old ${cat.breed}`
    : `A ${cat.breed} kitten.`

  const idx = Math.floor(Math.random() * (catImages.length))

  return (
    <Link to={`/cats/${cat.id}`} className="card">
      <div className="card-content">
        <div className="card-img-container">
          <img className="usr-img" src={catImages[idx]} alt={`${cat.name}`} />
        </div>
        <h2 className="card-title">{cat.name}</h2>
        <p>{ageString}</p>
        <p><small>{cat.description}</small></p>
      </div>
    </Link>
  )
}

export default CatCard

