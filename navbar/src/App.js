import logo from './logo.svg';
import './App.css';
import {Navbar} from "./Components/Navbar";
import {Route, Routes} from "react-router-dom";
import {About} from "./Pages/About";
import {Contact} from "./Pages/Contact";
import {Home} from "./Pages/Home";
import {Login} from "./Pages/Login";
import {SignUp} from "./Pages/Sign up";
import {Footer} from "./Components/Footer";

function App() {
  return (
    <div className="App">
<Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signUp" element={<SignUp/>}/>
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
