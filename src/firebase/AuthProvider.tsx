import { getAuth, User } from "firebase/auth";
import React, {createContext} from "react"
import app from "./firebase";

type AuthContextProps = {
  currentUser: User | null | undefined
}

const AuthContext = createContext<AuthContextProps>({ currentUser: undefined })

const AuthProvider = ({ children }: {children: JSX.Element}) => {
  const auth = getAuth(app)
  const [currentUser, setCurrentUser] = React.useState<User | null | undefined>(undefined)

  React.useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setCurrentUser(user)
    })
  }, [])

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }