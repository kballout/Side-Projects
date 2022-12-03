import React, { useRef, useState } from 'react'
import {FaBars} from 'react-icons/fa'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Sidebar({generateBracket}) {
    const [open, setOpen] = useState(false)
    const [listOfPlayers, setListOfPlayers] = useState(["john", "jack", "snake"])
    const newPlayer = useRef('')
    const gameName = useRef('')

   function checkBracket(){
      if(gameName.current.value === ''){
        toast('You need a game name', {'type': 'error'})
      } else if(listOfPlayers.length < 3){
        toast('You need at least 3 players!' , {'type': 'error'})
      } else{
        (generateBracket(gameName.current.value, listOfPlayers))
      }
   }

  return (
    <div className='flex'>
      <ToastContainer />
      <div className='flex flex-col h-screen  w-14 bg-indigo-900 p-3 gap-3'>
            <FaBars className=' cursor-pointer' onClick={() => setOpen(!open)} size={30} />
            <hr className='mb-5' />
      </div>
        <div className={`h-screen bg-indigo-600 flex flex-col items-center gap-7 ${open ? 'w-96 visible': 'w-0 hidden'}`}>
          <h2 className='font-bold text-2xl'>Tournament Settings</h2>
          <div className=' text-center flex flex-col'>
            <h2 className='text-lg'>Game Name</h2>
            <input ref={gameName} className='bg-white rounded h-7 w-48 mt-1 text-center text-black' />
          </div>
          <div className='text-center flex flex-col'>
            <div className='flex justify-between text-lg'>
              <h2 className=' font-bold'>Participants</h2>
              <h3 className='italic'>Total:{listOfPlayers.length}</h3>
            </div>
            <div className='bg-blue-400 h-full flex-wrap p-3 text-black' style={{width: '350px'}}>
              <div className='flex gap-2 items-center'>
                <h3>New Player</h3>
                <input ref={newPlayer} className='bg-white rounded h-7 w-48 mt-1 text-center text-black' />
                <button onClick={() => setListOfPlayers([...listOfPlayers, newPlayer.current.value])}>Add</button>
              </div>
              <hr className='mt-2 border-black' />
              <div className='mt-8'>
                {listOfPlayers.map((name, index) => {
                  return(
                    <div key={index} className='flex justify-between w-48'>
                      <h4 key={index}>{index + 1}: {name}</h4>
                      <button onClick={() => setListOfPlayers( listOfPlayers.filter((_, i) => i !== index))}>Delete</button>
                    </div>
                  )
                })}
              </div>
            </div>
            <button onClick={() => checkBracket()} className='mt-10 border-black border-2 bg-black rounded-md text-lg font-bold'>Generate</button>
          </div>
        </div>
    </div>
  )
}
