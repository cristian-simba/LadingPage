import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  
  const handleNav = () =>{
    setNav(!nav)
  }
  return (
    <div className='max-w-[1200px] mx-auto flex justify-between items-center text-white px-12 h-24'>
        <h1 className='w-full text-3xl font-bold text-[#9370db]'>Home</h1>
        <ul className='hidden md:flex'>
          <li className='p-4'>Definicion</li>
          <li className='p-4'>APIs</li>
          <li className='p-4'>Perfil</li>
          <li className='p-4'>Contacto</li>
        </ul>
        {/* Responsive*/}
        <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20}/>:<AiOutlineMenu size={20}/>}
        </div>
        
        <ul className={`fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] transform ${nav ? 'translate-x-0' : '-translate-x-full'} ease-in-out duration-500`}>
            <h1 className='w-full text-3xl font-bold m-4 md:hidden'>Home</h1>
            <li className='p-4 border-b border-gray-100'>APIs</li>
            <li className='p-4 border-b border-gray-100'>Creadores</li>
            <li className='p-4 border-b border-gray-100'>Contactos</li>
          </ul>

    </div>
    
  )
}

export default Navbar