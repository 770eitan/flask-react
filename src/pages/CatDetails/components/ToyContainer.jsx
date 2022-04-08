import { Link } from 'react-router-dom'

const ToyContainer = ({ toy, addToCollection }) => {
  return (
    <div key={toy.id} className="toy-container">
      <div className="color-block" style={{ backgroundColor: toy.color }}></div>
      <Link to={`/toys/${toy.id}`}>
        <p>{toy.name}</p>
      </Link>
      {addToCollection &&
        <form id={toy.id} onSubmit={addToCollection}>
          <button type="submit" className="btn submit">Give toy</button>
        </form>
      }
    </div>
  )
}

export default ToyContainer