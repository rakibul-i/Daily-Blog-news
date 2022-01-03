import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NotFound from "./components/pages/NotFound";
import Login from "./components/pages/Login";
import BlogDetails from "./components/Blogs/BlogDetails";
import Signup from "./components/pages/Signup";
import Home from "./components/pages/Home";
import useAuth from "./hooks/useAuth";

import ReactLoading from "react-loading";
import WriteBlog from "./components/profile/WriteBlog";
import PrivateRoute from "./components/authentication/PrivateRoute";

function App() {
  const { blogs } = useAuth();

  if (!blogs.length) {
    return (
      <section
        className="flex items-center justify-center bg-gray-800"
        style={{ height: "100vh" }}
      >
        <ReactLoading type="spokes" color="#fff" height="60px" width="60px" />
      </section>
    );
  }

  return (
    <>
      <Switch>
        <PrivateRoute path="/writeBlog">
          <WriteBlog />
        </PrivateRoute>
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
