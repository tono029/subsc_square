import React, { useContext } from "react";
import { InputLabel, Button, TextField } from "@mui/material";
import { useRouter } from "next/router";
import Link from "next/link";
import MuiLink from "@mui/material/Link"

import app from "src/firebase/firebase";
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth"
import { GeneralContext } from "./StateContext";

export default function Signup() {
  const auth = getAuth(app)
  const {setFlash} = useContext(GeneralContext)

  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      await createUserWithEmailAndPassword(auth, email, password)
      await sendEmailVerification(auth.currentUser)
      setFlash({open: true, mess: "確認メールが送信されました", type: "success"})
    } catch (e) {
      setFlash({open: true, mess: "エラーが発生しました。", type: "error"})
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
      </form>

      <Link href="/login">
        <MuiLink>ログインする</MuiLink>
      </Link>
    </div>
  )
}