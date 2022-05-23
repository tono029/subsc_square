import React, {useContext} from "react";
import { AuthContext } from "src/firebase/AuthProvider";
import { InputLabel, TextField, Button } from "@mui/material";
import Link from "next/link";

export default function Create() {
  const {currentUser} = useContext(AuthContext)

  const handleSubmit = () => {

  }

  return (
    <div className="create-form">
      {
        currentUser ?
        
        <div className="container">
          <h2>投稿する</h2>

          <form onSubmit={handleSubmit}>
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

        <p>投稿するには<Link href="/">ログイン</Link>してください</p>
      }
    </div>
  )
}