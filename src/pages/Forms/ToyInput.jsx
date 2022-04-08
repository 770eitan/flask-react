const ToyInput = ({ form, handleChange }) => {
  return (
    <>
      <label htmlFor="name">Name</label>
      <input
        value={form.name ? form.name : ''} onChange={handleChange} id="name"
        required name="name" type="text" placeholder="Name" autoComplete="off"
      />
      <label htmlFor="description">Description</label>
      <input
        value={form.description ? form.description : ''} onChange={handleChange} id="description"
        required name="description" type="text" placeholder="Description" autoComplete="off"
      />
      <label htmlFor="color">Color</label>
      <input
        value={form.color ? form.color : '#ff0000'} onChange={handleChange} id="color"
        required name="color" type="color" placeholder="Color" autoComplete="off"
      />
    </>
  )
}

export default ToyInput