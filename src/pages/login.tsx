import React, { useContext } from "react";
import { InputLabel, Button, TextField } from "@mui/material";
import { useRouter } from "next/router";

import app from "src/firebase/firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { GeneralContext } from "src/components/StateContext";
import { AuthContext } from "src/firebase/AuthProvider";

export default function Signin() {
  const router = useRouter()
  const auth = getAuth(app)
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")
  const {setFlash} = useContext(GeneralContext)
  const {currentUser} = useContext(AuthContext)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!currentUser) {
      try {
        await signInWithEmailAndPassword(auth, email, password)
        setFlash({open: true, mess: "ログインしました", type: "success"})
        router.push("/posts")
      } catch (e) {
        setFlash({open: true, mess: "ログインに失敗しました", type: "error"})
      }
      // 既にログインしているとき
    } else {
      setFlash({open: true, mess: "既にログインしています", type: "info"})
    }
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