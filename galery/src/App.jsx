
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import {OtterOne} from './components/OtterOne'
import {OtterTwo} from './components/OtterTwo'
import {OtterThree} from './components/OtterThree'
import {OtterFour} from './components/OtterFour'
import {OtterFive} from './components/OtterFive'
import {OtterSix } from './components/OtterSix'
import {OtterSeven } from './components/OtterSeven'
import  {Navigation}  from './components/Navigation'

function App() {
  

  return (
    <>
    <BrowserRouter>
    <div className='justify-between content-center'>
      <h1 className='m-auto text-center'>Otters Gallery </h1>
    </div>
    <div className="container">
    <Routes>
        <Route path='/OtterOne' element={<OtterOne className='main-img-container'/>}/>
        <Route path='/OtterTwo' element={<OtterTwo className='main-img-container'/>}/>
        <Route path='/OtterThree' element={<OtterThree className='main-img-container'/>}/>
        <Route path='/OtterFour' element={<OtterFour className='main-img-container'/>}/>
        <Route path='/OtterFive' element={<OtterFive className='main-img-container'/>}/>
        <Route path='/OtterSix' element={<OtterSix className='main-img-container'/>}/>
        <Route path='/OtterSeven' element={<OtterSeven className='main-img-container'/>}/>
     </Routes>
    </div>
    <div className='container'>
      <Navigation/>
    </div>
      
    </BrowserRouter>    
    </>
  )
}

export default App
