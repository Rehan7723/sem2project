
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Landing from './components/Landing';
import PLogin from './components/PLogin';
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
      </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
