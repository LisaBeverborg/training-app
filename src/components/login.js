import React, { useRef, useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"

export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history.push("/")
    } catch {
      setError("Failed to log in")
    }

    setLoading(false)
  }

  return (
    <>
      <div>
        <div>
          <h2>Log In</h2>
          {error && <p>{error}</p>}
          <form onSubmit={handleSubmit}>
            <label id="email">
              <div>Email</div>
              <input type="email" ref={emailRef} required />
            </label>
            <label id="password">
              <div>Password</div>
              <input type="password" ref={passwordRef} required />
            </label>
            <button disabled={loading} type="submit">
              Log In
            </button>
          </form>
          <div>
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
        </div>
      </div>
      <div>
        Want to create an account? <Link to="/signup">Sign Up</Link>
      </div>
    </>
  )
}