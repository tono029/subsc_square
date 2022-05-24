import React, {useContext, useState} from "react";
import app from "src/firebase/firebase";
import { getAuth, signOut } from "firebase/auth";
import { useRouter } from "next/router";
import { Button, Dialog, DialogContent, DialogContentText,  DialogActions } from "@mui/material";
import { AuthContext } from "src/firebase/AuthProvider";
import { GeneralContext } from "src/components/StateContext";

export default function Settings() {
  const auth = getAuth(app)
  const router = useRouter()
  const {currentUser} = useContext(AuthContext)
  const {setFlash} = useContext(GeneralContext)
  const [open, setOpen] = useState(false)

  const handleLogout = async () => {
    await signOut(auth)
    setFlash({open: true, mess: "ログアウトしました", type: "success"})
    router.push("/")
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
          onClick={() => setOpen(true)}
        >
          ログアウト
        </Button>
      </div>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
      >
        <DialogContent>
          <DialogContentText>
            ログアウトしてよろしいですか？
          </DialogContentText>
        </DialogContent>

        <DialogActions>
          <Button
            onClick={handleLogout}
            variant="contained"
          >
            はい
          </Button>

          <Button
            onClick={() => setOpen(false)}
          >
            キャンセル
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}