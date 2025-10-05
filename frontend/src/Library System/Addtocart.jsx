import React ,{useState} from 'react'

const Addtocart = () => {
    const [si,setSi] = useState(false);
  return (
    <>
      <div className='bg-black/40 flex justify-around'>
      { si? (<div className='block justify-center text-3xl px-3 pt-82 h-164 text-center text-white'>
    <i onClick={() => setSi(false)} class="fa-solid fa-angle-right cursor-pointer  transition duration-300 
               drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]"></i>
    </div>)
      : (<div className='block justify-center text-3xl px-3 pt-82 h-164 text-center text-white'>
    <i onClick={() => setSi(true)} class="fa-solid fa-angle-left cursor-pointer transition duration-300 
               drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]"></i>
    </div>)}
      <div className='border-1 border-white rouned-lg shadow:0_0_30px_rgba(255,255,255,0.9) h-164'></div>
      {si? (<div className='text-white text-center w-100 h-164 p-3 transition-transform duration-500 ease-in-out text-shadow:0_0_10px_rgba(255,255,255,0.9)'>
         <h1 className="text-3xl font-bold mb-6 drop-shadow-[0_0_10px_rgba(255,255,255,0.9)]">
        Your Cart
      </h1>
      <p className="text-lg mt-30">Your cart is empty 🛒</p>
</div>): ("")}
    </div>
    </>
  )
}

export default Addtocart
