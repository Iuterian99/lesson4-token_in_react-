import "bootstrap/dist/css/bootstrap.min.css"
import Login from "./components/login"
import signUp from "./components/signUp"
import "./App.css";

import { Switch, Route } from "react-router-dom"

function App() {
  return (
    <Switch>
      <Route path="/" component={signUp} />
      <Route path="/login" component={Login} />
    </Switch>
  )
}

export default App;
