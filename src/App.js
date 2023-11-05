import logo from './logo.svg';
import './App.css';
import './App.scss';
import Messanger from './Content/Messanger/Messanger';
import {
 BrowserRouter,Route,Routes
} from "react-router-dom"
import Login from './Content/Login/Login';
import Registration from './Content/Login/Registration';
import Layout from './Content/layout/Layout';
function App() {
  return (
    <>
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/registraion" element={<Registration/>}/>
        <Route path="/layout" element = {<Layout/>}/>
      </Routes>
    </BrowserRouter>
   
      
    </>
  );
}

export default App;
