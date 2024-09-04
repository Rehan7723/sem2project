
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Landing from './components/Landing';
import Leave from './components/Leave';
import Mail from './components/Mail';
import PLogin from './components/PLogin';
import Proc from './components/Proc';
import Pproc from './components/proctor/P_proc';
import Phome from './components/proctor/Phome';
import Pleave from './components/proctor/Pleave';
import Pmail from './components/proctor/Pmail';
import Stdlist from './components/proctor/Stdlist';
import Profile from './components/Profile';
import Result from './components/Result';
import SLogin from './components/SLogin';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/login' element={<SLogin/>}/>
        <Route path='/plogin' element={<PLogin/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/proc' element={<Proc/>}/>
        <Route path='/leave' element={<Leave/>}/>
        <Route path='/mail' element={<Mail/>}/>
        <Route path='/result' element={<Result/>}/>


        <Route path='/phome' element={<Phome/>}/>
        <Route path='/pproc' element={<Pproc/>}/>
        <Route path='/pleave' element={<Pleave/>}/>
        <Route path='/stdlist' element={<Stdlist/>}/>   
        <Route path='/pmail' element={<Pmail/>}/>



        
      </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
