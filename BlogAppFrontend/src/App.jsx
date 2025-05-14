import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'
import Blog from './components/Blog'
import Addblog from './components/Addblog'
import Main from './components/Main'
import PrivateRoutes from './components/PrivateRoutes'
// import PrivateRoutes from './components/PrivateRoutes'
// import Main from './components/Main'
// import Navbar from './components/Navbar'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route element={<PrivateRoutes/>}>
        <Route path='/blog' element={<Main child={<Blog/>}/>}></Route>
        <Route path='/addblog' element={<Main child={<Addblog/>}/>}></Route>
      </Route>
      {/* <Route path='/addblog' element={<Addblog/>}></Route> */}
    
      
      {/* <Route path='/navbar' element={<Navbar/>}></Route> */}

    </Routes>
  )
}

export default App
