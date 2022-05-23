import React from "react";
import { InputLabel, Button, TextField } from "@mui/material";
import { useRouter } from "next/router";
import Link from "next/link";
import MuiLink from "@mui/material/Link"

import app from "src/firebase/firebase";
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth"

export default function Signup() {
  const router = useRouter()
  const auth = getAuth(app)

  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      await createUserWithEmailAndPassword(auth, email, password)
      await sendEmailVerification(auth.currentUser)
      alert("確認メールが送信されました")
    } catch (e) {
      alert(e)
    }
  }
  
  return (
    <div className="container sign-form">
      <h2>新規登録</h2>

      <form onSubmit={handleSubmit}>
        <InputLabel>メールアドレス</InputLabel>
        <TextField 
          name="email"
          type="email"
          size="small"
          onChange={e => setEmail(e.target.value)}
        />
  
        <InputLabel>パスワード</InputLabel>
        <TextField 
          name="password"
          type="password"
          size="small"
          onChange={e => setPassword(e.target.value)}
        />
  
        <Button
          type="submit"
          variant="contained"
        >
          登録
        </Button>

        <Link href="/login">
          <MuiLink>ログインする</MuiLink>
        </Link>
        
      </form>
    </div>
  )
}