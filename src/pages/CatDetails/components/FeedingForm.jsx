import { useState } from 'react'
import moment from 'moment'

// Services


const initialState = {
  meal: 'B',
  date: moment(new Date()).format('YYYY-MM-DDTHH:mm')
}

const FeedingForm = ({ cat, setCat }) => {
  const [form, setForm] = useState(initialState)

  const addToFeedings = async (e) => {}

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  return (
    <>
      <h3>Add a Feeding</h3>
      {cat.fed
        ? <p className="fed">{cat.name} has been fed all their meals for today!</p>
        : <p className="unfed">{cat.name} might be hungry!</p>
      }

      {!cat.fed &&
        <form onSubmit={addToFeedings}>
          <div>
            <label htmlFor="meal">Meal:</label>
            <select name="meal" onChange={handleChange} required >
              <option value="B">Breakfast</option>
              <option value="L">Lunch</option>
              <option value="D">Dinner</option>
            </select>
          </div>
          <div>
            <label htmlFor="date">Feeding Date:</label>
            <input required onChange={handleChange} type="datetime-local" name="date" value={form.date ? form.date : ''} />
          </div>

          <button type="submit" className="btn submit">Add Feeding</button>
        </form>
      }
    </>
  )
}

export default FeedingForm