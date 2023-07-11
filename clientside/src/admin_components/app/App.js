import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Userlogin } from '../../user_components/credentials/login/userlogin';
import { UserRegister } from '../../user_components/credentials/register/userregister';
import { Userupdate } from '../../user_components/credentials/update/userforget';
import { Adminpage } from '../adminpage/adminpage';
import { Adminusermanage } from '../adminpage/selectionbar/adminusermanage/adminusermanage';
import { Dashboard } from '../adminpage/selectionbar/dashboard/dashboard';
import { Landmanage } from '../adminpage/selectionbar/landmanage/landmanage';
import { Unitmanage } from '../adminpage/selectionbar/unitmanage/unitmanage';
import { Usermanage } from '../adminpage/selectionbar/usermanage/usermanage';
import { Adminupdate } from '../credentials/forgot/forgot';
import { Adminlogin } from '../credentials/login/adminlogin';
import { ContactUs } from '../credentials/login/email';
import { Adminregister } from '../credentials/register/register';
import Home from '../home/home';
import Login from '../home/login';
import { About, Contact } from '../home/nav&foot&contact&about/con_abt';
import './App.css';
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/mail' element={<ContactUs/>}/>
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
