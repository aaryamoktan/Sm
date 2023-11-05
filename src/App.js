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
import Home from './Content/Home/Home';
import Menu from './Content/Menu/Menu';
import Profile from './Content/profile/Profile';
import { Friends } from './Content/friends/Friends';
import Notification from './Content/Notification/Notification';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/registraion" element={<Registration/>}/>
        <Route path="/menu" element={<Menu/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="friends" element={<Friends/>}/>
        <Route path="notification" element={<Notification/>}/>
        <Route path="profile" element={<Profile/>}/>
        <Route path="/messanger" element={<Messanger/>}/></Routes>    
    </>
  );
}

export default App;
