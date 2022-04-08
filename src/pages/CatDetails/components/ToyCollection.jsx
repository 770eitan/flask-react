// Image Assets
import StringToy from '../../../assets/string.svg'
import MouseToy from '../../../assets/mouse.svg'
import FishToy from '../../../assets/fish.svg'

// Components
import ToyContainer from './ToyContainer'

const ToyCollection = ({ cat, toys, user, addToCollection }) => {
  return (
    <section className="toys">
      <div className="subsection-title">
        <h2>Toys</h2>
        <img src={StringToy} alt="A ball of string" />
        <img src={MouseToy} alt="A mouse" />
        <img src={FishToy} alt="A fishy toy" />
      </div>
      <h3>{cat.name}'s Toys</h3>
      <div className="subsection-content">
        {cat.toys.length
          ? cat.toys.map((toy) => <ToyContainer key={toy.id} toy={toy} />)
          : <p className="no-toys">{cat.name} doesn't have any toys 😞</p>
        }
      </div>
      {user.id === cat.profile_id &&
        <>
          <h3>Available Toys</h3>
          <div className="subsection-content">
            {toys.length
              ? toys.map((toy) => <ToyContainer key={toy.id} toy={toy} cat={cat} user={user} addToCollection={addToCollection} />)
              : <p className="all-toys"> {cat.name} already has all the available toys 🥳</p>
            }
          </div>
        </>
      }
    </section>
  )
}

export default ToyCollection


