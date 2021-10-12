import React, { useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"


export default function Logout() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }

  return (
    <div>
          <h2>Profile</h2>
          {error && <p>{error}</p>}
          <strong>Email:</strong>{currentUser.email}
          <Link to="/update-profile">
          Update Profile
          </Link>
        <button onClick={handleLogout}>Log Out</button>
    </div>
  
  )
}