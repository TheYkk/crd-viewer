import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Homepage from "./pages/homepage"
import View from "./pages/view"

function App() {
  return (
    <Router>
        <Switch>
          <Route path="/" component={Homepage} />
          <Route path="/view" component={View} />
        </Switch>
    </Router>
  );
}

export default App;
