import React, {useContext} from "react";
import { AuthContext } from "src/firebase/AuthProvider";
import { InputLabel, TextField, Button } from "@mui/material";
import Link from "next/link";
import MuiLink from "@mui/material/Link"
import { useRouter } from "next/router";

export default function Create() {
  const router = useRouter()
  const {currentUser} = useContext(AuthContext)

  const handleSubmit = () => {
    router.push("/")
  }

  return (
    <div className="create-form">
      {
        currentUser ?
        
        <div className="container">
          <h2>投稿する</h2>

          <form onSubmit={handleSubmit}>
            <InputLabel>タイトル</InputLabel>
            <TextField 
              type="text"
              name="title"
            />

            <InputLabel>本文</InputLabel>
            <TextField 
              type="text"
              name="main-text"
            />

            <Button
              type="submit"
            >
              投稿
            </Button>
          </form>
        </div>
        
        :

        <p className="no-login-text">投稿するには
          <Link href="/login">
            <MuiLink>ログイン</MuiLink>
          </Link>してください
        </p>
      }
    </div>
  )
}