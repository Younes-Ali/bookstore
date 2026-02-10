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
import Profile from './pages/Profile';
import About from './pages/About';
import Books from './pages/Books';



export default function App() {
  return (
    <div className='w-full '>
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
            <Route path='profile' element={<Profile/>}/>
          </Route>
          <Route path='/' element={<MainLayout/>}>
            <Route index element={<Home/>}/>
            <Route path='books' element={<Books/>}/>
            <Route path='about' element={<About/>}/>
          </Route>
          <Route path='*' element={
            <div className='w-full h-screen flex items-center justify-center'>
              <h1 className='text-4xl font-bold text-gray-200'>404 - Page Not Found</h1>
            </div>
          }/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
