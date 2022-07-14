import './App.css';
import './assets/sb-admin-2.min.css';
import Sidebar from './components/1.Sidebar';
import Topbar from './components/2.Topbar';
import Dashboard from './components/3.Dashboard';
import Footer from './components/4.Footer';


function App() {
  return (
    <>
      <div id="wrapper">
      <Sidebar/>
          <div id="content-wrapper" class="d-flex flex-column">
              <div id="content">
              <Topbar/>
                    <div class="container-fluid">
                    <Dashboard/>
                    </div>
              </div> 
          <Footer/>   
          </div>     
      </div>
    </>
  );
}

export default App;
