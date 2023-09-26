import {BrowserRouter as Router , Routes , Route} from "react-router-dom";
import './App.css';

import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'

import HomePage from './components/HomePage';
import BlogPage from "./components/BlogPage";
import EventsPage from "./components/EventsPage";
import Organizer from "./components/Organizer";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import ForgetPassword from "./components/ForgetPassword";
import ResetPassword from "./components/ResetPassword";
import ArrowUp from "./components/ArrowUp";
import BookedEvents from "./components/BookedEvents";
import Admin from "./components/Admin";



function App() {
  return (
    <>
     
     <Router>
      <>
        <Routes>

          <Route path="/" element={<HomePage/>}>Home</Route>
          <Route path="/blog" element={<BlogPage/>}>Blog</Route>
          <Route path="/register" element={<SignUp/>}>sign up</Route>
          <Route path="/organizer" element={<Organizer/>}>Organizer</Route>
          <Route path="/events" element={<EventsPage/>}>Ju events</Route>
          <Route path="/login" element={<Login/>}>log in</Route>

          <Route path="/forget-password" element={<ForgetPassword/>}></Route>
          <Route path="/reset-password" element={<ResetPassword/>}></Route>
          <Route path="/bookedEvents" element={<BookedEvents/>}></Route>

          <Route path="/admin" element={<Admin/>}></Route>


        </Routes>

      </>
      
     </Router>

     <ArrowUp/>
  
    </>
  );
}

export default App;
