import "bootstrap/dist/css/bootstrap.min.css"
import Login from "./components/login"
import Posts from "./components/posts"
import "./App.css";

import { Switch, Route } from "react-router-dom"

function App() {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/posts" component={Posts} />
    </Switch>
  )
}

export default App;
