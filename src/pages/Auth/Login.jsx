import '../../styles/Form.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { login, getUser } from '../../services/authService'

// Image Assets
import NerdCat from '../../assets/nerd-cat.svg'

const Login = ({ setUser }) => {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    error: null,
    email: '',
    password: ''
  })

  const handleSubmit = async (e) => {
    try {
      e.preventDefault()
      await login(form)
      const currentUser = getUser()
      setUser(currentUser)
      navigate('/cats')
    } catch (err) {
      setForm({ ...form, error: err.toString()})
    }
  }

  const handleChange = (e) => {
    setForm({
      ...form,
      error: null,
      [e.target.name]: e.target.value
    })
  }

  return (
    <>
      <div className="page-header">
        <h1>Login</h1>
        <img src={NerdCat} alt="A cat using a computer" />
      </div>

      {form.error &&
        <h3 className="red-text">{form.error}</h3>
      }

      <section className="form-container">
        <form onSubmit={handleSubmit}>
          <label>Email:</label>
          <input
            value={form.email} onChange={handleChange}
            name="email" type="email" autoComplete="off"
          />
          <label>Password:</label>
          <input
            value={form.password} onChange={handleChange}
            name="password" type="password" autoComplete="off"
          />
          <button type="submit" className="btn submit">Login</button>
        </form>
      </section>
    </>
  )
}

export default Login