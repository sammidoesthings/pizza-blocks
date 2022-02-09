import './App.css';
import { Route, Routes } from 'react-router-dom';

//page imports
import { Header, Footer } from './components/HeaderFooter';
import LandingPage from './components/LandingPage';
import RegisterPage from './components/RegisterPage';
import LoginPage from './components/LoginPage';
import AccountInfoPage from './components/AccountInfoPage';
import PizzaPage from './components/PizzaPage';


function App() {
  return (
    <div className='app-container'>

      <Header/>
        <div className='app-body'>
          <Routes>
          
            <Route exact path='/' element={<LandingPage/>}/>
            <Route path='/register' element={<RegisterPage/>}/>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/account' element={<AccountInfoPage/>}/>
            <Route path='/dashboard' element={<PizzaPage/>}/>      
          
          </Routes>
        {/* END OF APP BODY */}
        </div>
      <Footer/>
    {/* END OF APP CONTAINER */}
    </div>
  );
}

export default App;
