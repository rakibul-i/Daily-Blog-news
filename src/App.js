import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import NotFound from "./components/pages/NotFound";
import Login from "./components/pages/Login";
import BlogDetails from "./components/Blogs/BlogDetails";
import Signup from "./components/pages/Signup";
import Home from "./components/pages/Home";

function App() {
  return (
    <>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/blogs/:id" component={BlogDetails} />
        <Route path="/home" component={Home} />
        <Route exact path="/" component={Home} />
        <Route path="*" component={NotFound} />
      </Switch>
    </>
  );
}
export default App;
