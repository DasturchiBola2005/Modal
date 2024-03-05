import React from 'react'

const ModuleDetail = ({isOpen,setIsopen}) => {
  return (
    <div className={`${isOpen ? "flex" : "hidden"} bg-black/60  justify-center items-center fixed top-0 left-0 w-full h-screen`}>
            <div className='bg-white rounded-lg w-[500px]'>
                <h1 className='m-5 text-4xl '>Module Header</h1><hr />
                <p className='m-5 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ea id deleniti quae, iusto voluptatibus magni odit beatae sunt obcaecati error suscipit maxime inventore nostrum at reiciendis accusantium voluptates quaerat.</p><hr />
                 <button  onClick={()=>setIsopen(false)} className=' bg-red-500 text-white py-1 px-3 text-center rounded m-5'>CHIQISH</button>
            </div>
        </div>
  )
}

export default ModuleDetail