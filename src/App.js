import { Route, Switch } from "react-router-dom";
import MainNavigation from "./components/layout/main-navigation";
import TodoCreatePage from './pages/todo-create-page';
import TodoDetailsPage from './pages/todo-details-page';
import TodoListPage from './pages/todo-list-page';

function App() {
  return (
    <div>
      <MainNavigation />
      <Switch>
        <Route path="/" exact>
          <TodoListPage />
        </Route>
        <Route path="/todo-create" exact>
          <TodoCreatePage />
        </Route>
        <Route path="/todo-details/:id" exact>
          <TodoDetailsPage />
        </Route>
      </Switch>     
    </div>
  );
}

export default App;