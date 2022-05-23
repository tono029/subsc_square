import Header from "./Header";
import Head from "next/head";
import { createTheme, ThemeProvider } from "@mui/material";
import { green } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: green[500]
    }
  },

  typography: {
    fontSize: 14,
    fontFamily: [
      "sans-serif"
    ].join(","),
  }
})

// 共通レイアウト
export const Layout = ({children}: {children: JSX.Element}) => {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Subsc Square</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="contents">
        <Header />
  
        <main>
          {children}
        </main>
      </div>
    </ThemeProvider>
  )
}