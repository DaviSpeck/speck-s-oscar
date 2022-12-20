import "./App.css"
import HomePage from "./home/HomePage"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from "./components/header/Header"

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
        </Switch>
      </Router>
    </>
  )
}

export default App
