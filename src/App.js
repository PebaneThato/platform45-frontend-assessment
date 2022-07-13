import MembershipForm from "./components/MembershipForm"
import { ThemeProvider } from "@mui/styles"
import { createTheme, responsiveFontSizes } from "@mui/material/styles"
let theme = createTheme()
theme = responsiveFontSizes(theme)

// let Yellow= #ffd300;
// let Tangerine= #ff9200;
// let  Blue= #cad7dd;
// let  Green= #49c8a8;
// let  LGrey= #f5f8f9;
// let  Grey= #373d40;
function App() {
  return (
    <ThemeProvider theme={theme}>
      <MembershipForm />
    </ThemeProvider>
  )
}

export default App
