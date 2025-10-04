import React from 'react'

const Navbar = () => {
  return (
    <>
    <div className='flex justify-between gap-5 bg-black/40 h-20 w-full p-5'>
       <div className='flex justify-around text-shadow-[0_0_20px_rgba(255,255,255,0.6)] text-white'>
        <div className=' text-5xl drop-shadow-[0_0_20px_rgba(255,255,255,0.6)] text-shadow-[0_0_20px_rgba(255,255,255,0.6)]'>Library Books</div>
       </div>
       <div>
<input
  className="px-3 py-1 border-2 border-white bg-transparent 
             text-2xl text-white 
             placeholder-white text-shadow:0_0_10px_rgba(255,255,255,0.9)
             shadow-[inset_0_0_15px_rgba(255,255,255,0.9),0_0_25px_rgba(255,255,255,0.9)] 
             rounded-lg w-150
             focus:outline-none focus:ring-2 focus:ring-white
             transition duration-300"
  placeholder="Search.........."
/>
       </div>
       <div className='flex justify-around gap-4'>
        <div className='px-3 py-1 border-2 border-white bg-transparent 
             text-xl text-white 
             placeholder-white text-shadow:0_0_10px_rgba(255,255,255,0.9)
             hover:text-black hover:bg-white hover:scale-120 hover:shadow:0_0_30px_rgba(255,255,255,0.9)
             shadow-[inset_0_0_15px_rgba(255,255,255,0.9),0_0_25px_rgba(255,255,255,0.9)] 
             rounded-lg cursor-pointer
             focus:outline-none focus:ring-2 focus:ring-white
             transition duration-300"'><i className="fa-solid fa-right-from-bracket mr-1"></i> Logout</div>
             <div className='px-3 py-1 border-2 border-white bg-transparent 
             text-xl text-white 
             placeholder-white text-shadow:0_0_10px_rgba(255,255,255,0.9)
             hover:text-black hover:bg-white hover:scale-120 hover:shadow:0_0_30px_rgba(255,255,255,0.9)
             shadow-[inset_0_0_15px_rgba(255,255,255,0.9),0_0_25px_rgba(255,255,255,0.9)] 
             rounded-lg cursor-pointer
             focus:outline-none focus:ring-2 focus:ring-white
             transition duration-300"'><i className="fa-solid fa-user"></i> Signout</div>
       </div>
    </div>    </>
  )
}

export default Navbar
