import { CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useRef, useState } from "react";
// import { grey } from "@mui/material/colors";

// import MyComponents from "./MyComponents";
import MyComponents2 from "./MyComponents2";
import ToggleButton from "./ToggleButton";

// const defaultTheme = createTheme({
//   palette: {
//     primary: {
//       main: '#ffffff',
//     },
//     secondary: {
//       main: '#3f3f3f',
//     },
//   },
// });

const themeLight = createTheme({
  palette: {
    background: {
      default: "#e4f0e2"
    },
    primary: {
      main: '#ffffff',
    },
    secondary: {
      main: '#3f3f3f',
    },
  },
  overrides: {
    MuiButton: {
      label: {
        color: "#f1f1f1",
      },
    },
  },
});

const themeDark = createTheme({
  palette: {
    background: {
      default: "#222222"
    },
    text: {
      primary: "#ffffff"
    },
    primary: {
      main: '#3f3f3f',
    },
    secondary: {
      main: '#ffffff',
    },
  },
  overrides: {
    MuiButton: {
      label: {
        color: "#f1f1f1",
      },
    },
  },
});

function App() {
  const [isLightTheme, setIsLightTheme] = useState(true);
  const nameRef = useRef();
  const clickHandler = () => {
    console.log('value', nameRef.current.getValue());
  }
  return (
    <ThemeProvider theme={isLightTheme ? themeLight : themeDark}>
      {/* <MyComponents /> */}
      <CssBaseline />
      <button onClick={() => setIsLightTheme(previousTheme => previousTheme = !previousTheme)}>Toggle Theme</button>
      <ToggleButton onClick={clickHandler} />
      <MyComponents2 ref={nameRef} />
    </ThemeProvider>
  );
}

export default App;
