import React, {useContext} from "react";
import { AuthContext } from "src/firebase/AuthProvider";
import { InputLabel, TextField, Button } from "@mui/material";
import Link from "next/link";
import MuiLink from "@mui/material/Link"
import { useRouter } from "next/router";
import { GeneralContext } from "src/components/StateContext";

export default function Create() {
  const router = useRouter()
  const {currentUser} = useContext(AuthContext)
  const {setFlash} = useContext(GeneralContext)

  const handleSubmit = () => {
    setFlash({open: true, mess: "投稿しました", type: "success"})
    router.push("/create")
  }

  return (
    <div className="create-form">
      {
        currentUser ?
        
        <div className="container">
          <h2>投稿する</h2>

          <form onSubmit={handleSubmit}>
            <InputLabel>サービス名</InputLabel>
            <TextField 
              type="text"
              name="sub_name"
              size="small"
            />

            <InputLabel>キーワード、特徴</InputLabel>
            <TextField 
              type="text"
              name="key-word"
              size="small"
              placeholder="カンマ区切りで5つほど入力してください"
            />

            <InputLabel>本文</InputLabel>
            <TextField 
              type="text"
              name="main-text"
              multiline
              rows={6}
            />

            <Button
              type="submit"
              variant="contained"
            >
              投稿
            </Button>
          </form>
        </div>
        
        :

        <p className="no-login-text">
          投稿するには
          <Link href="/login">
            <MuiLink>ログイン</MuiLink>
          </Link>
          してください
        </p>
      }
    </div>
  )
}