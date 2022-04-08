import './CatList.css'

// Components
import CatCard from '../../components/CatCard/CatCard'

const CatList = ({ cats, catImages }) => {
  return (
    <>
      <section className="page-header">
        <h1>Cat List</h1>
        <img src={catImages[1]} alt="A cool cat" />
        <img src={catImages[3]} alt="A happy cat" />
        <img src={catImages[5]} alt="A cat in a teacup" />
        <img src={catImages[4]} alt="A cat in a box" />
      </section>
      <section className="card-container">
        {cats.map((cat) => (
          <CatCard
            cat={cat}
            key={cat.id}
            catImages={catImages}
          />
        ))}
      </section>
    </>
  )
}

export default CatList