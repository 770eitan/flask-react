import { useNavigate } from 'react-router-dom'

const CatActions = ({ cat, user }) => {
  const navigate = useNavigate()
  return (
    cat.profile_id === user.id &&
    <div className="actions">
      <button className="btn warn" onClick={() => navigate(`/cats/${cat.id}/edit`, { state: cat })}>Edit</button>
      <button className="btn danger" onClick={() => navigate(`/cats/${cat.id}/confirmation`, { state: cat })}>Delete</button>
    </div>
  )
}

export default CatActions