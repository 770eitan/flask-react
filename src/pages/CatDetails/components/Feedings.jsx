// Image Assets
import CatCone from '../../../assets/cat-cone.svg'
import CatOnigiri from '../../../assets/cat-onigiri.svg'
import CatKabob from '../../../assets/kitty-kabob.svg'

// Components
import FeedingForm from './FeedingForm'
import FeedingTable from './FeedingTable'

const Feedings = ({ cat, user, setCat }) => {
  return (
    <section className="feedings">
      <div className="subsection-title">
        <h2>Feedings</h2>
        <img
          src={CatCone}
          alt="An ice cream cone cat"
        />
        <img
          src={CatOnigiri}
          alt="A cat as onigiri"
        />
        <img
          src={CatKabob}
          alt="A kabob of kittens"
        />
      </div>
      {user.id === cat.profile_id && <FeedingForm cat={cat} setCat={setCat} />}
      <h3>Past Feedings</h3>
      {cat.feedings.length
        ? <FeedingTable cat={cat} />
        : <div className="subsection-content"><p>{cat.name} has never been fed 😔</p></div>
      }
    </section>
  )
}

export default Feedings