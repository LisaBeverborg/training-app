import React, { useRef } from "react"
import { Link } from "react-router-dom"

export default function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()

    
    
    return (
    <>
      <div>
        <div>
          <h2>Sign Up</h2>
          <form>
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
            <button type="submit">
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