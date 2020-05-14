import React, { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

// import Blank from "./components/Blank/Blank";
// const Home = lazy(() => import('./routes/Home'));
const Meter = lazy(() => import('./components/Meter/Meter'));


// import Meter from "./components/Meter/Meter";

//TODO Web Template Studio: Add routes for your new pages here.
const App = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={Meter} />
          <Route path="/Meter" component={Meter} />
        </Switch>
      </Suspense>
      <Footer />
    </React.Fragment>
  );
}

export default App;
