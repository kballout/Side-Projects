import { useEffect, useMemo, useState } from 'react'

function App() {

  const [listOfPlayers, setListOfPlayers] = useState(["john", "jack", "snake"])
  const [newPlayer, setNewPlayer] = useState()


  return (
    <div className='py-10 px-10'>
      <div className='flex flex-col text-4xl font-bold items-center mt-10'>
        <h1>Configure Tournament Settings</h1>
      </div>
      <div className='mt-10'>
        <h2 className=' font-bold text-2xl'>Number of players</h2>
        <div className='bg-blue-400 h-full w-6/12 text-black'>
          <div className='flex w-full justify-between'>
            <h3>Total:{listOfPlayers.length}</h3>
            <div>
              <h3>Add New Player</h3>
              <div>
                <input onChange={(value) => setNewPlayer(value.target.value)} className='bg-white ' type="text" value={newPlayer} />
                <button onClick={() => setListOfPlayers([...listOfPlayers, newPlayer])}>Add</button>
              </div>
            </div>
          </div>
          <div>
            {listOfPlayers.map((name, index) => {
              return(
                <h4 key={index}>{index + 1}: {name}</h4>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
