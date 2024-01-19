import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { BlogDetails, Create, Home, Navbar, NotFound } from "./components";

function App() {

  return (

    <Router>

      <div className="">

        <Navbar />

        <div className="max-w-[600px] mx-auto my-[40px] p-[20px]">

          <Switch>

            <Route exact path="/">

              <Home />

            </Route>

            <Route path="/create">

              <Create />

            </Route>

            <Route path="/blogs/:id">

              <BlogDetails />

            </Route>

            <Route path="*">

              <NotFound />

            </Route>

          </Switch>

        </div>

      </div>

    </Router>

  )
}

export default App;