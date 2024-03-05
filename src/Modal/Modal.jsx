import React from 'react'
import { useState } from 'react'
import ModuleDetail from './ModuleDetail'

const Modal = () => {
    const [isOpen, setIsopen] = useState(false)
    return (
     <div className='flex justify-center items-center'>
        <button onClick={()=>setIsopen(true)} className='bg-black text-white py-1 px-3 text-center rounded m-5'>KIRISH+</button>
     <ModuleDetail isOpen={isOpen} setIsopen={setIsopen}/>
     </div>
    )
}


export default Modal