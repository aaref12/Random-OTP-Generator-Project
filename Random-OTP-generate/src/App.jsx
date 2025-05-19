import { useCallback, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 const [input,setInput]=useState('')

 const otpganerate=useCallback(()=>{
  let num=Math.floor(Math.random()*900000)+100000
    setInput(num)
    
 },[])
 const Otpref=useRef(null)
  const CopyOtp=useCallback(()=>{
    Otpref.current.select()
    navigator.clipboard.writeText(Otpref.current.value)
    alert('OTP Copied')
  },[])

  return (
    <>
      <h1 className='text-3xl font-bold underline  text-white text-center'>Random OTP Generator</h1>
      
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800">
        
         <div class="mb-6">
        <label for="password" class="block mb-2 text-sm font-medium text-white dark:text-white">Random-OTP-Generator</label>
        <input type="text" value={input}
        ref={Otpref}
        readOnly id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required />
         </div> 

         <button type="button" class="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={otpganerate}>CLICK FOR OTP</button>

         <button type="button" onClick={CopyOtp} class="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">COPY</button>

         
         
       

        </div>

    </>
  )
}

export default App
