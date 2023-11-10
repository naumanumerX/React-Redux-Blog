
import { useEffect, useState } from 'react'
import './App.css'
import conf from './conf/conf'
import { useDispatch } from 'react-redux';
import authService from './appwrite/auth'
//import {login,logout} from './store/authSlice'

import { login ,logout} from './store/authSlice';
import  Footer  from './components/Footer/Footer';
import  Header  from './components/Header/Header';
function App() {
console.log(conf.appWriteUrl)
//console.log("environment variable",import.meta.env.VITE_APPWRITE_URL);

const [loading,setLoading]=useState(true);
const dispatch=useDispatch()

useEffect(()=>{
  authService.getCurrentUser()
  .then ((userData)=>{
    if(userData){
      dispatch(login({userData}))
    }
    else{
      dispatch(logout());

    }
   
  })
  .finally(()=>setLoading(false))
},[])
return  !loading?(
  <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
    <div className="w-full block
    ">


      <Header>
        <main>
        {/* <Outlet></Outlet> */}
        </main>
        </Header>
      <Footer></Footer>
    </div>
  </div>
):null


  return (
    <>
    <h1>Hello</h1></>
  )
}

export default App
