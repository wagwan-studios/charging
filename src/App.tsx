import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import SupportAndContactDetail from './pages/SupportAndContactDetail'
import Home from './pages/Home'
import Help from './pages/Help'
import Stations from './pages/Stations'

function App() {

  return (
    <BrowserRouter basename='/charging/'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/charging/help' element={<Help/>}/>
        <Route path='/charging/how-to-charge' element={<SupportAndContactDetail/>}/>
        <Route path='/charging/stations' element={<Stations/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
