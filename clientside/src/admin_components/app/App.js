import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Userlogin } from '../../user_components/credentials/login/userlogin';
import { UserRegister } from '../../user_components/credentials/register/userregister';
import { Adminregister } from '../credentials/register/register';
import { Userupdate } from '../../user_components/credentials/update/userforget';
import { Adminusermanage } from '../adminpage/selectionbar/adminusermanage/adminusermanage';
import { Dashboard } from '../adminpage/selectionbar/dashboard/dashboard';
import { Landmanage } from '../adminpage/selectionbar/landmanage/landmanage';
import { Unitmanage } from '../adminpage/selectionbar/unitmanage/unitmanage';
import { Usermanage } from '../adminpage/selectionbar/usermanage/usermanage';
import { Adminlogin } from '../credentials/login/adminlogin';
import Home from '../home/home';
import Login from '../home/login';
import { About, Contact } from '../home/nav&foot&contact&about/con_abt';
import './App.css';
import './responsive.css';
import { Order } from '../../user_components/Orders/order';
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={(localStorage.adminmail===''?<Adminlogin/>:<Contact/>)}/>
      <Route path='/adminregister' element={<Adminregister/>}/>
      <Route exact path='/adminlogin' element={<Adminlogin/>}/>
      <Route exact path='/userlogin' element={<Userlogin/>}/>
      <Route exact path='/userregister' element={<UserRegister/>}/>
      <Route exact path='/userupdate' element={<Userupdate/>}/>
      <Route exact path='/adminpage' element={(localStorage.adminmail===''?<Adminlogin/>:<Dashboard/>)}/>
      <Route exact path='/dashboard' element={(localStorage.adminmail===''?<Adminlogin/>:<Dashboard/>)}/>
      <Route exact path='/usermanage' element={(localStorage.adminmail===''?<Adminlogin/>:<Usermanage/>)}/>
      <Route exact path='/landmanage' element={(localStorage.adminmail===''?<Adminlogin/>:<Landmanage/>)}/>
      <Route exact path='/adminusermanage' element={(localStorage.adminmail===''?<Adminlogin/>:<Adminusermanage/>)}/>
      <Route exact path='/unitmanage' element={(localStorage.adminmail===''?<Adminlogin/>:<Unitmanage/>)}/>
      <Route path='/orders' element={<Order/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
