import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { About,Contact } from '../navfoot/con_abt';
import { Adminlogin,Userlogin } from '../login/login';
import { Adminregister, UserRegister } from '../register/register';
import Home from '../home/home';
import { Adminupdate, Userupdate } from '../forgot/forgot';
import { Adminpage } from '../adminpage/adminpage';
import { Dashboard } from '../adminpage/adminlist/dashboard';
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route exact path='/adminlogin' element={<Adminlogin/>}/>
      <Route exact path='/userlogin' element={<Userlogin/>}/>
      <Route exact path='/adminregister' element={<Adminregister/>}/>
      <Route exact path='/userregister' element={<UserRegister/>}/>
      <Route exact path='/userupdate' element={<Userupdate/>}/>
      <Route exact path='/adminupdate' element={<Adminupdate/>}/>
      <Route exact path='/adminpage' element={<Adminpage/>}/>
      <Route exact path='/dashboard' element={<Dashboard/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
