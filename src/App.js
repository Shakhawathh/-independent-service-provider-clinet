
import './App.css';
import { Route, Routes } from 'react-router-dom';
import About from './Pages/About/About';
import Home from './Pages/Home/Home/Home';
import Blog from './Pages/Blog/Blog';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import Cheakout from './Pages/Cheakout/cheakout';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register'
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';



function App() {
  return (
    <div>
      <Header></Header>
     <Routes>
       <Route path="/" element={<Home></Home>}></Route>
       <Route path='/service/:checkoutId' element={
         <RequireAuth>
           <Cheakout></Cheakout>
         </RequireAuth>
       }></Route>
       <Route path="/About" element={<About></About>}></Route>
       <Route path="/Blog" element={<Blog></Blog>}></Route>
       <Route path="/Login" element ={<Login></Login>}></Route>
       <Route path="/Register" element={<Register></Register>}></Route>
       <Route path="*" element={<NotFound></NotFound>}></Route>
     </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
