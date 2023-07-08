import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { About,Contact } from '../home/nav&foot&contact&about/con_abt';
import { Adminlogin,Userlogin } from '../credentials/login/login';
import {Adminupdate,Userupdate} from '../credentials/forgot/forgot'
import { Adminregister, UserRegister } from '../credentials/register/register';
import Home from '../home/home';
import { Adminpage } from '../adminpage/adminpage';
import { Dashboard } from '../adminpage/selectionbar/dashboard/dashboard';
import { Usermanage } from '../adminpage/selectionbar/usermanage/usermanage';
import { Landmanage } from '../adminpage/selectionbar/landmanage/landmanage';
import { Adminusermanage } from '../adminpage/selectionbar/adminusermanage/adminusermanage';
import { Unitmanage } from '../adminpage/selectionbar/unitmanage/unitmanage';
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
      <Route exact path='/usermanage' element={<Usermanage/>}/>
      <Route exact path='/landmanage' element={<Landmanage/>}/>
      <Route exact path='/adminusermanage' element={<Adminusermanage/>}/>
      <Route exact path='/unitmanage' element={<Unitmanage/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
