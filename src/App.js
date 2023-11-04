import logo from './logo.svg';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"
import Layout from './Content/layout/Layout';

import Home from './Content/Home/Home';
const router = createBrowserRouter([
  {
    path:"/",
    element: <Layout/>,
    children:[{
      path:"",
      element:<Home/>
    },
    {
     
    },{
      
    }]

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
