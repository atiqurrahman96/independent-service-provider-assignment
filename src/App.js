import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Shared/Header/Header';
import Home from "./Pages/Home/Home"
import Blogs from "./Pages/Home/Blogs/Blogs"
import About from "./Pages/Home/About/About"
import LogIn from "./Pages/Home/LogIn/LogIn"
import SignUp from "./Pages/Home/SignUp/SignUp"
import Footer from "./Shared/Footer/Footer"
import ServiceDescription from './Pages/Home/ServiceDescription/ServiceDescription';
import CheckOut from './Pages/Home/LogIn/CheckOut/CheckOut';
import RequireAuth from './Pages/Home/LogIn/RequireAuth/RequireAuth';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/service/:serviceId' element={<ServiceDescription />}></Route>
        <Route path='/checkout' element={<RequireAuth>
          <CheckOut></CheckOut>
        </RequireAuth>}></Route>
        <Route path='/blogs' element={<Blogs />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/logIn" element={<LogIn />}></Route>
        <Route path="/signUp" element={<SignUp />}></Route>

      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;
