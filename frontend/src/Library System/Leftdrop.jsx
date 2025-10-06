import React, { useState } from 'react'

const Leftdrop = ({setGenre,prof,all,adv,his}) => {
    const [side,setSide] = useState(false);
  return (
    <div className='bg-black/40 flex justify-around'>
        { side? (
      <div className='text-white text-center w-100 h-164 p-3 transition-transform duration-500 ease-in-out text-shadow:0_0_10px_rgba(255,255,255,0.9)'>
        <i className="fa-regular fa-circle-user text-9xl drop-shadow:0_0_15px_rgba(255,255,255,0.9) text-shadow-[0_0_20px_rgba(255,255,255,0.9)]"></i>
        <div className='px-30 mt-10 py-1 border-2 border-white bg-transparent 
             text-xl text-white 
             placeholder-white text-shadow:0_0_10px_rgba(255,255,255,0.9)
             hover:text-black hover:bg-white hover:shadow:0_0_30px_rgba(255,255,255,0.9)
             shadow-[inset_0_0_15px_rgba(255,255,255,0.9),0_0_25px_rgba(255,255,255,0.9)] 
             rounded-lg cursor-pointer
             focus:outline-none focus:ring-2 focus:ring-white
             transition duration-300"' onClick={prof}>Your Profile</div>
        <div className='px-30 mt-4 py-1 border-2 border-white bg-transparent 
             text-xl text-white 
             placeholder-white text-shadow:0_0_10px_rgba(255,255,255,0.9)
             hover:text-black hover:bg-white hover:shadow:0_0_30px_rgba(255,255,255,0.9)
             shadow-[inset_0_0_15px_rgba(255,255,255,0.9),0_0_25px_rgba(255,255,255,0.9)] 
             rounded-lg cursor-pointer
             focus:outline-none focus:ring-2 focus:ring-white
             transition duration-300' onClick={all}>All Books</div>
        <div className='px-20 mt-4 py-1 border-2 border-white bg-transparent 
             text-xl text-white 
             placeholder-white text-shadow:0_0_10px_rgba(255,255,255,0.9)
             hover:text-black hover:bg-white hover:shadow:0_0_30px_rgba(255,255,255,0.9)
             shadow-[inset_0_0_15px_rgba(255,255,255,0.9),0_0_25px_rgba(255,255,255,0.9)] 
             rounded-lg cursor-pointer
             focus:outline-none focus:ring-2 focus:ring-white
             transition duration-300 ' onClick={his}>Historical Books</div>
        <div className='px-20 mt-4 py-1 border-2 border-white bg-transparent 
             text-xl text-white 
             placeholder-white text-shadow:0_0_10px_rgba(255,255,255,0.9)
             hover:text-black hover:bg-white hover:shadow:0_0_30px_rgba(255,255,255,0.9)
             shadow-[inset_0_0_15px_rgba(255,255,255,0.9),0_0_25px_rgba(255,255,255,0.9)] 
             rounded-lg cursor-pointer
             focus:outline-none focus:ring-2 focus:ring-white
             transition duration-300 ' onClick={adv}>Adventure Books</div>
        <div className='px-10 mt-4 py-1 border-2 border-white bg-transparent 
             text-xl text-white 
             placeholder-white text-shadow:0_0_10px_rgba(255,255,255,0.9)
             hover:text-black hover:bg-white hover:shadow:0_0_30px_rgba(255,255,255,0.9)
             shadow-[inset_0_0_15px_rgba(255,255,255,0.9),0_0_25px_rgba(255,255,255,0.9)] 
             rounded-lg cursor-pointer
             focus:outline-none focus:ring-2 focus:ring-white
             transition duration-300 ' onClick={() => setGenre('Business & Finance')}>Business & Finance Books</div>
            <div className='px-10 mt-4 py-1 border-2 border-white bg-transparent 
             text-xl text-white 
             placeholder-white text-shadow:0_0_10px_rgba(255,255,255,0.9)
             hover:text-black hover:bg-white hover:shadow:0_0_30px_rgba(255,255,255,0.9)
             shadow-[inset_0_0_15px_rgba(255,255,255,0.9),0_0_25px_rgba(255,255,255,0.9)] 
             rounded-lg cursor-pointer
             focus:outline-none focus:ring-2 focus:ring-white
             transition duration-300' onClick={() => setGenre('Law & Politics')}>Law & Politics Books</div>
      </div>)
      : ""}
      <div className='border-1 border-white rouned-lg shadow:0_0_30px_rgba(255,255,255,0.9) h-164'></div>
      {side? (<div className='block justify-center text-3xl px-3 pt-82 h-164 text-center text-white'>
    <i onClick={() => setSide(false)} className="fa-solid fa-angle-left cursor-pointer transition duration-300 
               drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]"></i>
    </div>): (<div className='block justify-center text-3xl px-3 pt-82 h-164 text-center text-white'>
    <i onClick={() => setSide(true)} className="fa-solid fa-angle-right cursor-pointer  transition duration-300 
               drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]"></i>
    </div>)}
    </div>
  )
}

export default Leftdrop
