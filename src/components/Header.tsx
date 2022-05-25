import { useRouter } from "next/router"
import React, { useContext } from "react"
import { AuthContext } from "src/firebase/AuthProvider"
import TemporaryDrawer from "./Drawer";

export default function Header() {
  const router = useRouter()
  const {currentUser} = useContext(AuthContext)

  console.log(currentUser)

  const user = currentUser && currentUser.email && currentUser.email.split("@")[0]

  const greeting = () => {
    const now = new Date().getHours()
    if (now >= 6 && now < 12) {
      return "おはようございます"
    } else if (now >= 12 && now < 18) {
      return "こんにちは"
    } else {
      return "こんばんは"
    }
  }

  return (
    <header>
      <div className="header-left">
        <h1 onClick={() => router.push("/")}>Subsc Square</h1>
      </div>

      <div className="header-right">
        
        {
          currentUser &&

          <div className="greeting">
            <p>{greeting()}, {user}さん</p>
          </div>
        }

        <TemporaryDrawer />

      </div>
    </header>
  )
}