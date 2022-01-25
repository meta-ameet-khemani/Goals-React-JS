import { useContext } from "react";

import ThemeContext from "./store/theme-context";

function App() {
  
  const ctx = useContext(ThemeContext);

  return (
    <div style={{backgroundColor: ctx.isLightTheme ? 'white' : 'black'}}>
      <span style={{color: !ctx.isLightTheme ? 'white' : 'black'}}>Current Theme { ctx.isLightTheme ? 'Light' : 'Dark' }</span>
      <button onClick={ctx.toggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default App;
