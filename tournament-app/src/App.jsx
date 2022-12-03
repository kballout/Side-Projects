import { useEffect, useMemo, useRef, useState } from 'react'
import Sidebar from './Sidebar';

function App() {

  function generateBracket(gameName, listOfPlayers){
    //start the matches
    return true
  }

  return (
    <div className='flex flex-col'>
      <h1 className='text-4xl font-bold mt-10 text-center'>Tournament Maker</h1>
        <div className=' absolute top-20 flex items-start float-left'>
          <Sidebar generateBracket={generateBracket}/>
        </div>
        <h2 className=' mt-5 self-center'>Bracket</h2>
    </div>
     
  )
}

export default App
