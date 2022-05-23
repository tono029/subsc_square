import React from "react";
import app from "src/firebase/firebase";
import { getAuth, signOut } from "firebase/auth";
import { useRouter } from "next/router";
import { Button } from "@mui/material";

export default function Settings() {
  const auth = getAuth(app)
  const router = useRouter()

  const handleLogout = async () => {
    await signOut(auth)
    await router.push("/")
    alert("ログアウトしました")
  }

  return (
    <div className="container">
      <h2>settings</h2>

      <Button
        onClick={handleLogout}
      >
        ログアウト
      </Button>
    </div>
  )
}