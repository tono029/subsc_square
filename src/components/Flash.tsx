import { Snackbar, Alert } from "@mui/material";
import React, { useContext } from "react";
import { GeneralContext } from "./StateContext";

export default function Flash() {
  const {flash, setFlash} = useContext(GeneralContext)

  const handleClose = () => {
    setFlash({open: false})
  }

  return (
    <Snackbar
      open={flash.open}
      autoHideDuration={4000}
      onClose={handleClose}
      anchorOrigin={{vertical: "top", horizontal: "center" }}
    >
      <Alert
        severity="info"
        onClose={handleClose}
      >
        {flash.mess}sadfsfd
      </Alert>
    </Snackbar>
  )
}