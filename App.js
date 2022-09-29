import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './Screen/home'
import Navigation from './Screen/navigation';
import Exercices from './Screen/exercices';
import Profile from './Screen/profile';
import Routines from './Screen/routines';
import Back from './exercices/back'
import Biscep from './exercices/biscep'
import Chest from '../src/exercices/chest/chest'
import Legs from './exercices/legs'
import Abdomen from './exercices/abdomen/abdomen'
import Shoulder from './exercices/shoulder'
import Buttocks from './exercices/buttocks'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
        <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/exercice' element={<Exercices />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/routines' element={<Routines />} />
          <Route path='/exercice/biscep' element={<Biscep />} />
          <Route path='/exercice/back' element={<Back />} />
          <Route path='/exercice/chest' element={<Chest />} />
          <Route path='/exercice/legs' element={<Legs />} />
          <Route path='/exercice/abdomen' element={<Abdomen />} />
          <Route path='/exercice/shoulder' element={<Shoulder />} />
          <Route path='/exercice/buttocks' element={<Buttocks />} />
        </Routes>
        </BrowserRouter>
  );
}

export default App;
