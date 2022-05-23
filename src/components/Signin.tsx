import React from "react";
import { InputLabel, Button, TextField } from "@mui/material";
import { useRouter } from "next/router";

import app from "src/firebase/firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"

export default function Signin() {
  const router = useRouter()
  const auth = getAuth(app)
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await signInWithEmailAndPassword(auth, email, password)
    router.push("/posts")
  }

  return (
    <div className="container sign-form">
      <h2>ログイン</h2>
      
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
          ログイン
        </Button>
        
      </form>
    </div>
  )
}