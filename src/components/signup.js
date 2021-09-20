import React from "react"
import { Link } from "react-router-dom"

export default function Signup() {

  return (
    <>
      <div>
        <div>
          <h2>Sign Up</h2>
          <div>
            <div id="email">
              <div >Email</div>
              <div type="email" required />
            </div>
            <div id="password">
              <div>Password</div>
              <div type="password" required />
            </div>
            <div id="password-confirm">
              <div>Password Confirmation</div>
              <div type="password" required />
            </div>
            <button type="submit">
              Sign Up
            </button>
          </div>
        </div>
      </div>
      <div>
        Already have an account? <Link to="/login">Log In</Link>
      </div>
    </>
  )
}