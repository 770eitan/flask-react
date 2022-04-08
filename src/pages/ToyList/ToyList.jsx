import './ToyList.css'

// Image Assets
import Fish from '../../assets/fish.svg'
import Mouse from '../../assets//mouse.svg'
import StringToy from '../../assets/string.svg'
import PostToy from '../../assets/post.svg'

// Components
import ToyCard from '../../components/ToyCard/ToyCard'

const ToyList = (props) => {
  return (
    <>
      <section className="page-header">
        <h1>Toy List</h1>
        <img src={Mouse} alt="a mouse toy" />
        <img src={Fish} alt="a fish toy" />
        <img src={StringToy} alt="a string toy" />
        <img src={PostToy} alt="a post toy" />
      </section>
      <section className="toy-card-container">
        {props.toys.map((toy) => (
          <ToyCard key={toy.id} toy={toy} isCard={true} />
        ))}
      </section>
    </>
  )
}

export default ToyList