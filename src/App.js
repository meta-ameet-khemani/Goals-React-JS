import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Form from "./components/form";
import Users from "./components/users";

function App() {

  return (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={Form} exact={true}></Route>
            <Route path="/users" component={Users}></Route>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
