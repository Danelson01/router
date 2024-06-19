import { Routes, Route } from 'react-router-dom'
import Target from './Components/Target'
import TaskDetails from './Components/TaskDetails'


function App() {
  return (
    <>
    
    
    
    
    
    <Routes>
      <Route path="/Target"  element={<Target />}></Route>      
      <Route path='/Target/:id' element={<TaskDetails/>} ></Route>
      <Route path='/Target/:description' element={<TaskDetails/>} ></Route>
    </Routes>
    </>
  )
}

export default App
