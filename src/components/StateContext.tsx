import React, { createContext } from "react"

type GeneralContextType = {
  flash: FlashType
  setFlash: React.Dispatch<React.SetStateAction<FlashType>>
}

const GeneralContext = createContext({} as GeneralContextType)

const GeneralProvider = ({ children }: {children: JSX.Element}) => {
  const [flash, setFlash] = React.useState<FlashType>({
    mess: "",
    open: false,
    type: "success"
  })

  return (
    <GeneralContext.Provider value={{
      flash, 
      setFlash,

    }}>
      {children}
    </GeneralContext.Provider>
  )
}

export { GeneralContext, GeneralProvider }