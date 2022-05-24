import React, {useContext} from "react";
import app from "src/firebase/firebase";
import { getAuth, signOut } from "firebase/auth";
import { useRouter } from "next/router";
import { Button } from "@mui/material";
import { AuthContext } from "src/firebase/AuthProvider";

export default function Settings() {
  const auth = getAuth(app)
  const router = useRouter()
  const {currentUser} = useContext(AuthContext)

  const handleLogout = async () => {
    await signOut(auth)
    await router.push("/")
  }

  return (
    <div className="container setting">
      <h2>settings</h2>

      <div className="setting-items">
        <div className="setting-item">
          <p>Email: </p>
          <p>{currentUser && currentUser.email}</p>
        </div>


      </div>

      <div className="setting-actions">
        <Button
          onClick={handleLogout}
        >
          ログアウト
        </Button>
      </div>
    </div>
  )
}