import "./App.scss";
import { Switch, Route } from "react-router-dom";
import { Layout } from "antd";
import Homepage from "./components/Homepage";

function App() {
  return (
    <Layout>
      <div className="routes">
        <Switch>
        <Route exact path="/">
            <Homepage />
          </Route>
        </Switch>
      </div>
    </Layout>
  );
}

export default App;
