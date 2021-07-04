import React, {useState, useEffect, useContext} from 'react'
import {useMessage} from '../hooks/message.hook'
import {useHttp} from '../hooks/http.hook'
import { AuthContext } from '../context/AuthContext'

const AuthPage = () => {
	const auth = useContext(AuthContext)
  const message = useMessage()
  const {loading, error, request, clearError} = useHttp()

  const [form,
    setForm] = useState({email: '', password: ''})

  useEffect(() => {
    message(error)
    clearError()
  }, [error, message, clearError])

  useEffect(() => {
    window.M.updateTextFields()
  }, [])

  const changeHandler = event => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })
  }

  const registerHandler = async() => {
    try {
      const data = await request('/api/auth/register', 'POST', {
        ...form
      })
      message(data.message)
    } catch (e) {}
  }

  const loginHandler = async() => {
    try {
      const data = await request('/api/auth/login', 'POST', {
        ...form
      })
      auth.login(data.token, data.userId)
    } catch (e) {}
  }

  return (
    <div className="row" style={{
      marginTop: 100
    }}>
      <div className="col s6 offset-s3">
        <div className="card blue darken-1">
          <div className="card-content white-text">
            <span className="card-title" style={{marginBottom: 40, fontWeight: 500}}>Auth</span>
            <div>
              <div className="input-field">
                <input
                  className="yellow-input"
                  placeholder="Enter email"
                  id="email"
                  name="email"
                  type="text"
                  value={form.email}
                  onChange={changeHandler}/>
                <label htmlFor="email">Email</label>
              </div>

              <div className="input-field">
                <input
                  className="yellow-input"
                  placeholder="Enter password"
                  id="password"
                  name="password"
                  type="password"
                  value={form.password}
                  onChange={changeHandler}/>
                <label htmlFor="password">Password</label>
              </div>

              <div className="card-action">
                <button
                  disabled={loading}
                  className="btn yellow darken-4"
                  style={{
                 	 marginRight: 10
                	}}
                  onClick={loginHandler}>Login</button>
                <button
                  disabled={loading}
                  className="btn gray whiten-1 black-test"
                  onClick={registerHandler}>Register</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default AuthPage