import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AuthLayout from './layouts/AuthLayout'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import { Toaster } from "react-hot-toast";
import Home from './pages/Home';
import MainLayout from './layouts/MainLayout';
import ForgetPass from './pages/ForgetPass';
import Code from './pages/Code';
import NewPass from './pages/NewPass';



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
            <Route path='forget-password' element={<ForgetPass/>} />
            <Route path='reset-password' element={<Code/>}/>
            <Route path='new-password' element={<NewPass/>}/>
          </Route>
          <Route path='/' element={<MainLayout/>}>
            <Route index element={<Home/>}/>
            <Route path='books' element={<p>books page</p>}/>
            <Route path='about' element={<p>about page</p>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
