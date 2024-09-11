
import { useState } from 'react'
import './App.css'
import star from './assets/starchitect.png'

function App() {
  const[message,setMessage]=useState(false)
  function clickHandler(event)
  {
    event.preventDefault();
setMessage(true);
setTimeout(()=>{
setMessage(false);
},3000)
  }
  
  return (
  <div className='w-screen h-screen bg-cover relative flex justify-center items-center bg-center bg-no-repeat' style={{backgroundImage:`url("https://png.pngtree.com/background/20231016/original/pngtree-red-and-black-frames-accent-a-sleek-dark-interior-with-an-picture-image_5582346.jpg")`}}>

  <div className='lg:w-[18%] md:w-[40%] md:h-[40%] lg:h-[45%] w-[60%] h-[50%] object-cover object-center rounded-xl absolute ml-10 mb-28 bg-transparent justify-center items-center flex-col gap-6  flex text-white'> 
  <img src={star}  className='mb-[45%] w-[50%]' alt="" />
  <h2 className='lg:text-3xl md:text-2xl text-xl text-white'>We Will be back soon</h2>
  <form action="" className='w-full flex flex-col gap-2 justify-center items-center'>
    <input className='w-[90%] px-2 py-2 rounded-lg bg-transparent text-white text-md placeholder:text-white outline-red-600 outline ' type="text" placeholder='Write your email' />
    <button className='bg-red-600 w-[80%] px-4 py-2 rounded-xl' onClick={clickHandler}>Notify Me</button>
    {}
    <p className={`text-red-600  ${message?("block"):("hidden")}`}>You will be notified Soon!</p>
  </form>
 
</div>
  </div>
  )
}

export default App
