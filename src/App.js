// import { BrowserRouter } from 'react-router-dom';
import './App.css';
import './assets/sb-admin-2.min.css';
import Sidebar from './components/1.Sidebar';
import Topbar from './components/2.Topbar';
import Dashboard from './components/3.Dashboard';
import Footer from './components/4.Footer';
import Table from './components/5.Table';
import Charts from './components/6.Charts';
import Createuser from './7.Createuser';
import Button from './components/8.Button';
import Cardcomp from './components/9.Cardcomp';
import Colors from './components/10.Colors';
import Login from './components/11.Login';
import {BrowserRouter,Routes,Route } from 'react-router-dom';


function App() {
  return (
    <>
      <BrowserRouter>
          <div id="wrapper">
          <Sidebar/>
              <div id="content-wrapper" class="d-flex flex-column">
                  <div id="content">
                  <Topbar/>
                        <div class="container-fluid">
                        {/* <Dashboard/> */}
                        {/* <Table/> */}
                        <Routes>
                            <Route path="/" element={<Dashboard/>}/>
                            <Route path="/tables" element={<Table/>}/>
                            <Route path="/tables/createuser" element={<Createuser/>}/>
                            <Route path="/charts" element={<Charts/>}/>
                            <Route path="/buttons" element={<Button/>}/>
                            <Route path="/cards" element={<Cardcomp/>}/>
                            <Route path="/colors" element={<Colors/>}/>
                            <Route path="/login" element={<Login/>}/>
                        </Routes>
                        </div>
                  </div> 
              <Footer/>   
              </div>     
          </div>
      </BrowserRouter>
    </>
  );
}

export default App;
