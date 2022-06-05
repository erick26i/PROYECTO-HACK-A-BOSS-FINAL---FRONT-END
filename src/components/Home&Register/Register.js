import { useState } from "react"
import { Navigate } from "react-router-dom"
import { useModal } from "../../hooks/ModalContext"
import { useToken } from "../../hooks/TokenContext"
import { useUser } from "../../hooks/UserContext"
import Login from "../Login/Login"
import './Register.css'

function Register() {
    const [username, setUser] = useUser('')
    const [password, setPassword] = useState('')
    const [mail, setMail] = useState('')
    const [token, setToken] = useToken()
    const [, setModal] = useModal()
    const handleSubmit = async e => {
        e.preventDefault()
        try {
          const res = await fetch('http://127.0.0.1:3000/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password, mail })
           
          })
          if (!res.ok) throw new Error(res.statusText)
          const data = await res.json()
          setToken(data.data)
        } catch (e) {
          console.warn(e)
        }
      }

      if(token){
        return <Navigate to="/"/>
      }
    return (
      <div className="reg-contain">
        <h2>Register</h2>
        <form id="register" onSubmit={handleSubmit}>
          <label>
            <input placeholder="Username" value={username} onChange={e=>setUser(e.target.value)}/>
          </label>
          <label>
            <input placeholder="Password" name="password" type="password" value={password} onChange={e => setPassword(e.target.value)}/>
          </label>
          <label>
            <input placeholder="demo@example.com" name="email" type="email" value={mail} onChange={e => setMail(e.target.value)}/>
          </label>
          <button>Register</button>
          <p>Alredy have an account? <span id="register-link" onClick={()=>setModal(<Login/>)}>Login</span></p>
        </form>
      </div>
    )
  }
  
  export default Register