import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Comp/Heading/Head";
import CreateBoard from "./Page/Createboard/CreateBoard";
import Home from "./Page/Home/Home";
import Board from "./Page/Board/Board";
import Demo from "./Page/Demo/Demo";
import "./App.css";

function App() {
  return (
     <React.Fragment>
    <div className="colorB">
      <Router>
        <Header />
        <Switch>
            <Route path="/createboard" component={CreateBoard} />
            <Route path="/home/:np" component={Demo}/>
           
            <Route path="/" exact component={Home} />
        
        </Switch>
      </Router>
    </div>
    </React.Fragment>
  );
}

export default App;
