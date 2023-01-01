import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { useEffect, useState } from 'react'
import { marked } from 'marked';

/* Use google drive api, work out account thing later, 
upload this jan 1, make a logo add day 2, try to add api day 3
and try to deploy on day 4 */


const startingstate = ``;



export default function Home() {

  const [edit,setEdit] = useState(startingstate);
  const [mark, setMarked] = useState("");

   useEffect(
    () => {
      setMarked(marked(edit));
    },
    [edit]
   )

   
  return (
    <div className='w-95% h-screen bg-slate-900 text-amber-200'>
      <div className='h-20 w-full flex justify-start mt-0 bg-indigo-900'>
        <h1>🌕 Luna</h1>
        
      </div>

      <div className='flex pt-5 w-99% h-full'>

      <div className="w-5/12 h-full ml-16">
      <div className='w-full justify-center flex text-3xl'><h6 className=''>Editor</h6></div>
            <textarea id='copy' className="w-full h-max bg-transparent rounded-md bg-slate-800" value={edit} onChange={(e) => setEdit(e.target.value)} />
          </div>
          <div className='w-1/12'></div>
          <div className="w-5/12 h-full ">
            <div className='w-full justify-center flex text-3xl'><h6 className=''>Markdown</h6></div><div className='w-full h-full bg-slate-800 rounded-md'>
            <div className="ml-10" dangerouslySetInnerHTML={{__html: mark}} id="preview"/>
            </div>
          </div> 
         
          </div>
    </div>
 
  )
}
