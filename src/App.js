import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <Navbar title="TextUtils"></Navbar>
        <div className="container">
          <Switch>
            {/* 
            /about/ --> 
            /about/user --> if we not use exact then this router also executed on about url
            */}
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/">
              <TextForm heading="Enter Text" />
            </Route>
          </Switch>
        </div>
    </Router>
    </>
  );
}

export default App;
