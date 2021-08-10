import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Nav></Nav>
      <Switch>
        <Route exact path="/" render={() => <Home />}></Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
