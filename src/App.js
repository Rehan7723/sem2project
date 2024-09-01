
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Landing from './components/Landing';
import Leave from './components/Leave';
import PLogin from './components/PLogin';
import Proc from './components/Proc';
import Profile from './components/Profile';
import SLogin from './components/SLogin';
import Pproc from './components/proctor/P_proc';
import Phome from './components/proctor/Phome';
import Pleave from './components/proctor/Pleave';

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


        <Route path='/phome' element={<Phome/>}/>
        <Route path='/pproc' element={<Pproc/>}/>
        <Route path='/pleave' element={<Pleave/>}/>
        
      </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
