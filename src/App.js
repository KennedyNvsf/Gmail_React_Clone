import React from 'react';
import "./styles/app.scss";//styling


//REACT ROUTER DOM

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";  


//components
import Header from './components/header/header.component';
import SideBar from './components/sidebar/sidebar.component';
import Mail from './components/mail_/mail.component';
import EmailList from './components/emailList_/email_list.component';



function App() {
  return (

    <Router>

          <div className="App">
          
            <Header/>

                <div className ="appBody">

                  <SideBar/>

                  <Switch>

                      <Route path="/">
                        <EmailList/>
                      </Route>

                      <Route path="/mail">
                        <Mail/>
                      </Route>

                  </Switch>

                </div>
          
          </div>
      </Router>
   
  );
}

export default App;
