import { createContext, useContext, useState } from 'react'
import { currentUser } from '../data/mockData'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

  const login = ({ email }) => {
    setUser({ ...currentUser, email: email || currentUser.email })
    return true
  }

  const register = ({ fullName, email, role }) => {
    setUser({ ...currentUser, name: fullName || currentUser.name, email: email || currentUser.email, role: role || 'Student' })
    return true
  }

  const logout = () => setUser(null)

  return (
    <AuthContext.Provider value={{ user, login, register, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
