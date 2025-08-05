import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import SupportAndContactDetail from './pages/SupportAndContactDetail'
import Home from './pages/Home'
import Help from './pages/Help'
import Stations from './pages/Stations'

function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/help' element={<Help/>}/>
        <Route path='/how-to-charge' element={<SupportAndContactDetail/>}/>
        <Route path='/stations' element={<Stations/>}/>
      </Routes>
    </HashRouter>
  )
}

export default App
