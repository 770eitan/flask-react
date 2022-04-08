const CatInput = ({ form, handleChange }) => {
  return (
    <>
      <label htmlFor="name">Name</label>
      <input
        value={form.name ? form.name : ''} onChange={handleChange} id="name"
        required name="name" type="text" placeholder="Name" autoComplete="off"
      />
      <label htmlFor="breed">Breed</label>
      <input
        value={form.breed ? form.breed : ''} onChange={handleChange} id="breed"
        required name="breed" type="text" placeholder="Breed" autoComplete="off"
      />
      <label htmlFor="description">Description</label>
      <input
        value={form.description ? form.description : ''} onChange={handleChange} id="description"
        required name="description" type="text" placeholder="Description" autoComplete="off"
      />
      <label htmlFor="age">Age</label>
      <input
        value={form.age ? form.age : ''} onChange={handleChange} id="age"
        required name="age" type="number" placeholder="Age" autoComplete="off"
      />
    </>
  )
}

export default CatInput