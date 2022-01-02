import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Switch>
        <Route path="/home" component={Home} />
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*" component={NotFound} />
      </Switch>
    </>
  );
}
export default App;
