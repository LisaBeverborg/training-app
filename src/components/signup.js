import React, { useRef, useState } from "react"
import { Link, useHistory } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"

export default function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const {signup} = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()
    
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
          return setError("Passwords do not match")
        }
  
        try {
            setError("")
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            history.push("/")
          } catch {
            setError("Failed to create an account")
          }
      
          setLoading(false)
        }
      
    
  return (
    <>
      <div>
        <div>
          <h2>Sign Up</h2>
          {error && <p>{error}</p>}
          <form  onSubmit={handleSubmit}>
            <label id="email">
              <div >Email</div>
              <input type="email" ref={emailRef} required />
            </label>
            <label id="password">
              <div>Password</div>
              <input type="password" ref={passwordRef} required />
            </label>
            <label id="password-confirm">
              <div>Password Confirmation</div>
              <input type="password" ref={passwordConfirmRef}required />
            </label>
            <button  disabled={loading} type="submit">
              Sign Up
            </button>
          </form>
        </div>
      </div>
      <div>
        Already have an account? <Link to="/login">Log In</Link>
      </div>
    </>
  )
}