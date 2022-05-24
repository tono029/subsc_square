import { useRouter } from "next/router"
import { Button, IconButton } from "@mui/material"
import React, { useContext } from "react"
import { AuthContext } from "src/firebase/AuthProvider"
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

export default function Header() {
  const router = useRouter()
  const {currentUser} = useContext(AuthContext)

  console.log(currentUser)

  return (
    <header>
      <div className="header-left">
        <h1 onClick={() => router.push("/")}>Subsc Square</h1>
      </div>

      <div className="header-right">
        {
          currentUser ?

          <div className="nav-item">
            <Button
              variant="contained"
              size="small"
              onClick={() => router.push("/settings")}
            >
              設定
            </Button>
          
          </div>

          :

          <></>

        }

        <div className="nav-item">
          <Button
            variant="contained"
            size="small"
            onClick={() => router.push("/posts")}
          >
            投稿一覧
          </Button>
        </div>

        <div className="nav-item">
          <Button
            variant="contained"
            size="small"
            onClick={() => router.push("/create")}
          >
            投稿する
          </Button>
        </div>


      </div>
    </header>
  )
}