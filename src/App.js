import React from "react";
import { Router } from "react-router-dom";
import Home from "./LOGIN/Home";
import Navbar from "./SIDEBAR/Navbar";
import { BroswerRouter as Router, Switch, Route } from "react-router-dom";
import Parent from "./REDUX/Parent";
import File1 from "./PROPS/File1";
import HomeContainer from "./CONTAINER/HomeContainer";
function App() {
  return (
    <>
      <HomeContainer />
      <File1 name="Amazon" description="Your AI assingnment" price={23} />
      <Parent name="Bibeka" age={27} Qualification="Btech" />
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" />
        </Switch>
      </Router>
      <Home />
    </>
  );
}
export default App;
