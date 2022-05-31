import './App.css';
import {Routes,Route} from 'react-router-dom'
import Home from '../../Home/Home';
import Navbar from '../Navbar/Navbar';
import Contactus from '../ContactUs/Contactus';
import About from '../About/About';
import Faq from '../FAQ/Faq';
import Mens from '../Mens/Mens';
import Womens from '../Womens/Womens';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/mens' element={<Mens/>}/>
        <Route path='/womens' element={<Womens/>}/>
        <Route path='/faq' element={<Faq/>}/>
        <Route path='/contactus' element={<Contactus/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
