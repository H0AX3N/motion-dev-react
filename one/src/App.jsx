import { easeInOut, motion } from 'motion/react'
import { useState } from 'react'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div 
      className='[perspective::1000px] [transform-style:preserve-3d] flex justify-center items-center h-screen w-full bg-neutral-900' 
      style={{
        backgroundImage:'radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.2) 1px, transparent 0',
        backgroundSize: '20px 20px',
        backgroundRepeat: 'repeat',
      }}
    >
      <motion.button 
        class="group relative text-neutral-500 px-12 py-4 rounded-md bg-black shadow-[inset_0_1px_2px_0_rgba(255,255,255,0.1),inset_0_-1px_2px_0_rgba(255,255,255,0.1)]"
        initial={{
          opacity:0
        }}
        animate={{
          opacity:100
        }}
        whileHover={{
          rotateX: 25,
          rotateY: 10,
          boxShadow: '0px 20px 50px rgba(8, 112, 184, 0.4)',
          y: -3
        }}
        whileTap={{
          y: 0
        }}
        transition={{
          duration: 0.3,
          ease: easeInOut
        }}
        style={{
          translateZ: 100
        }}
      >
        <span className='group-hover:text-cyan-500 duration-800'>Click Me</span>
        <span className='absolute inset-x-0 bottom-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-px w- mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300'></span>
        <span className='absolute inset-x-0 bottom-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent h-[4px] w-full mx-auto blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300'></span>
      </motion.button>

    </div>
  )
}

export default App
