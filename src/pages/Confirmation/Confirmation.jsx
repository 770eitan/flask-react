import { useNavigate, useLocation, useParams, Link } from 'react-router-dom'

// Image Assets
import NerdCat from '../../assets/nerd-cat.svg'

const Confirmation = (props) => {
  const { id } = useParams()
  const { state } = useLocation()
  const navigate = useNavigate()
  const resource = props.deleteCat ? 'cats' : 'toys'

  const handleDelete = () => {
    props.deleteCat && props.deleteCat(id)
    props.deleteToy && props.deleteToy(id)
    navigate(`/${resource}`)
  }

  return (
    <>
      <div className="page-header">
        <h1>Delete Confirmation</h1>
        <img src={NerdCat} alt="A cat using a computer" />
      </div>
      <section className="confirmation">
        <h2>Are you sure you want to delete {state?.name}?</h2>
        <Link className="btn submit" to={`/${resource}/${id}`}>Cancel</Link>
        <button onClick={handleDelete} type="button" className="btn danger">Yes - Delete!</button>
      </section>
    </>
  )
}

export default Confirmation