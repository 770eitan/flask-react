import { useNavigate } from 'react-router-dom'

const ToyActions = ({ toy, user }) => {
  const navigate = useNavigate()
  return (
    toy.profile_id === user.id &&
    <div className="actions">
      <button className="btn warn" onClick={() => navigate(`/toys/${toy.id}/edit`, { state: toy })}>Edit</button>
      <button className="btn danger" onClick={() => navigate(`/toys/${toy.id}/confirmation`, { state: toy })}>Delete</button>
    </div>
  )
}

export default ToyActions