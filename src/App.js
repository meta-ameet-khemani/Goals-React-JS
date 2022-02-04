import NewHeader from "./components/Header/NewHeader";
import MyRoutes from "./routes/Routes";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: "#3f3f3f",
    },
    secondary: {
      main: "#ffffff",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <MyRoutes>
        <NewHeader />
      </MyRoutes>
    </ThemeProvider>
  );
}

export default App;
