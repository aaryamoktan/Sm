import logo from './logo.svg';
import './App.css';
import './App.scss';
import Messanger from './Content/Messanger/Messanger';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"
import Layout from './Content/layout/Layout';
import Home from './Content/Home/Home';
import Profile from './Content/profile/Profile';
import Menu from './Content/Menu/Menu';
import Login from './Content/Login/Login';
import Registration from './Content/Login/Registration';
import Notification from './Content/Notification/Notification';
import { Friends } from './Content/friends/Friends';
const router = createBrowserRouter([
  { 
    path:"/",
    element: <Login/>
  ,
    children:[
      {
        path:"/registraion",
        element:<Registration/>
      }
      ,{
      path:"/",
      element:<Home/>
    },
    {
      path:"/messanger",
      element:<Messanger/>
    },
    {
      path:"/friends",
      element:<Friends/>
    }, {
      path:"/menu",
      element:<Menu/>
    },
    {
      path:"/profile",
      element:<Profile/>
    },
    {
      path:"/notification",
      element:<Notification/>
    },],
    

  }
])
function App() {
  return (
    <>
    
    <RouterProvider router={router}/>
   
      
    </>
  );
}

export default App;
