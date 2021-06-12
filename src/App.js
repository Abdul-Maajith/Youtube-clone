import React from 'react';
import Header from './Header';
import SideBar from './SideBar';
import Videos from './Videos';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SearchPage from './SearchPage';

function App() {
  return (
    <>
     <div className="App">
       <Router>
         <Header />
         <Switch>

          <Route path="/search/:searchTerm">
            <div className="app__page">
              <SideBar />
              <SearchPage />
            </div>
          </Route>

          <Route path="/">
            <div className="app__page">
              <SideBar />
              <Videos />
            </div>
          </Route>

         </Switch>
       </Router>
        
     </div>

    </>
  );
}

export default App;
