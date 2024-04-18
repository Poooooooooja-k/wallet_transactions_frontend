
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import Wallet from './components/Wallet';
import Contacts from './components/Contacts';
import MoneyTransaction from './components/MoneyTransaction';
function App() {
  return (
    <>
    <Routes>
     <Route path='/' element={<Login/>}></Route>
     <Route path='/signup' element={<Signup/>}></Route>
     <Route path='/dashboard' element={<Dashboard/>}></Route>
     <Route path='/profile' element={<Profile/>}></Route>
     <Route path='/wallet' element={<Wallet/>}></Route>
     <Route path='/contacts' element={<Contacts/>}></Route>
     <Route path='/transaction' element={<MoneyTransaction/>}></Route>
    </Routes>
    </>
  );
}

export default App;
