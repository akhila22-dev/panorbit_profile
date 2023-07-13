import './App.css';
import {createRoot } from "react-dom/client";
import { createBrowserRouter,Routes,Router, RouterProvider,Route,Link } from 'react-router-dom';
import Main from './Components/Main/Main';
import Profile from './routes/Profile'
import Gallery from './routes/Gallery'
import Posts from './routes/Posts'
import ToDo from './routes/ToDo'




function App() {
  return (
    <Router>
    <div className="App">
   
       <li>
         <Link to="/">Main</Link>
       </li>
       <li>
         <Link to="/Profile">Profile</Link>
       </li>
       <li>
         <Link to="/Gallery">Gallery</Link>
       </li>

    <Routes>
          <Route exact path='/' element={< Profile />}></Route>
          <Route exact path='/gallery' element={< Gallery />}></Route>
          <Route exact path='/posts' element={< Posts />}></Route>
   </Routes>
   </div>
</Router>
  );
  }
export default App;
