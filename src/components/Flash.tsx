import { Snackbar, Alert } from "@mui/material";
import React, { useContext } from "react";
import { GeneralContext } from "./StateContext";

export default function Flash() {
  const {flash, setFlash} = useContext(GeneralContext)

  const closeFlash = (prev: FlashType): FlashType => {
    return {
      mess: prev.mess,
      open: false,
      type: prev.type
    }
  }

  const handleClose = () => {
    setFlash(prev => closeFlash(prev))
  }

  return (
    <Snackbar
      open={flash.open}
      autoHideDuration={3500}
      onClose={handleClose}
      anchorOrigin={{vertical: "top", horizontal: "center" }}
    >
      <Alert
        severity={flash.type}
      >
        {flash.mess}
      </Alert>
    </Snackbar>
  )
}