import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useModal } from '../../hooks/ModalContext';
import { useToken } from '../../hooks/TokenContext';
import { useUser } from '../../hooks/UserContext';
import Login from '../Login/Login';
import './Register.css';
import logo from '../../img/logo_hab.jpg';
function Register() {
  const [username, setUser] = useUser('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [mail, setMail] = useState('');
  const [token, setToken] = useToken();
  const [, setModal] = useModal();
  const [error, setError] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const res = await fetch('http://127.0.0.1:3000/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password, mail }),
      });

      if (password !== password2) {
        setError('The password do not match');
        return;
      }
      if (!res.ok) throw new Error(res.statusText);
      const data = await res.json();
      setToken(data.data);
    } catch (e) {
      console.warn(e);
    }
  };

  if (token) {
    return <Navigate to='/' />;
  }
  return (
    <section className='reg-contain'>
      <h2>Register</h2>
      <form id='register' onSubmit={handleSubmit}>
        <img className='logo' src={logo} />
        <label>
          <input
            placeholder='Username'
            required
            value={username}
            onChange={(e) => setUser(e.target.value)}
          />
        </label>
        <label>
          <input
            placeholder='Password'
            name='password'
            type='password'
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label>
          <input
            placeholder='Repeat Password'
            name='password2'
            type='password'
            required
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
          />
        </label>
        <label>
          <input
            placeholder='Email'
            name='email'
            type='email'
            required
            value={mail}
            onChange={(e) => setMail(e.target.value)}
          />
        </label>

        <button className='btn'>Register</button>
        {error ? <h3 className='error-message'>{error}</h3> : null}
        <p className='account-text'>
          Alredy have an account?{' '}
          <span id='register-link' onClick={() => setModal(<Login />)}>
            Login
          </span>
        </p>
      </form>
    </section>
  );
}

export default Register;
