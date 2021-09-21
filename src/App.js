import "./css/main.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import Header from "./components/Header";
import ArtistPage from "./pages/ArtistPage";
import Home from "./pages/Home";
import {Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <Header />
        <div className="main__content">
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/Artist/:id" component={ArtistPage}  />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
