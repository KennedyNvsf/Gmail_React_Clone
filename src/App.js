import React from 'react';
import "./styles/app.scss";//styling



//components
import Header from './components/header/header.component';
import SideBar from './components/sidebar/sidebar.component';




function App() {
  return (
    <div className="App">
      
        <Header/>
        <SideBar/>
    </div>
  );
}

export default App;
