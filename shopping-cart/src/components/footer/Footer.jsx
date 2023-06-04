import React from 'react'
import {BsGithub,BsLinkedin} from "react-icons/bs"
import {SiGmail} from "react-icons/si"

const Footer = () => {
  return (
    <div className='flex items-center justify-evenly mx-auto mt-10 p-4 bg-yellow-500'>
        
        <a 
           href='https://github.com/MedGuemri' 
            target='_blank'  
            className='text-slate-700 hover:text-black text-3xl hover:scale-105'>
                <BsGithub   />
        </a>
        
        <a 
        href='https://www.linkedin.com/in/guemri-mohamed-amiine-a0016a260/' 
        target='_blank'  
        className='text-slate-700 hover:text-blue-600 text-3xl hover:scale-105'>
            <BsLinkedin   />
        </a>
        
        <a 
        href="mailto:mohamedamiineguemri@gmail.com"  
        target='_blank' 
        className='text-slate-700 hover:text-red-600 text-3xl hover:scale-105'>
            <SiGmail   />
        </a>

    </div>
  )
}

export default Footer