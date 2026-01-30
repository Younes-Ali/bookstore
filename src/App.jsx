import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AuthLayout from './layouts/AuthLayout'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import { Toaster } from "react-hot-toast";
import Home from './pages/Home';
import MainLayout from './layouts/MainLayout';



export default function App() {
  return (
    <div className='w-full h-dvh'>
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
      <BrowserRouter>
        <Routes>
          <Route path='/auth' element={<AuthLayout />}>
            <Route path='signin' element={<SignIn/>} />
            <Route path='signup' element={<SignUp/>} />
          </Route>
          <Route path='/' element={<MainLayout/>}>
            <Route index element={<Home/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
