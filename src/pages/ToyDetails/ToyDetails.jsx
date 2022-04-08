import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './ToyDetails.css'

// Services


// Components
import ToyActions from './components/ToyActions'
import ToyCard from '../../components/ToyCard/ToyCard'

const ToyDetails = ({ user }) => {
  const { id } = useParams()
  const [toy, setToy] = useState(null)

  useEffect(() => {}, [id])

  return (
    toy &&
    <>
      <section className="toy-details-container">
        <div className="toy-img">
          <ToyCard toy={toy} />
        </div>
        <div className="toy-details">
          <h1>{toy.name}</h1>
          <p>{toy.description}</p>
          <ToyActions toy={toy} user={user} />
        </div>
      </section>
    </>
  )
}

export default ToyDetails