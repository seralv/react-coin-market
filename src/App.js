import React, { useEffect, useState } from 'react';
import TableCoins from './components/TableCoins';
import CoinsService from './services/CoinsService'
import Search from './components/Search';

function App() {

  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState('')

  const getCoins = () => {
    CoinsService.getAll()
    .then( initialCoins => {
      setCoins( initialCoins )
    } )
  }

  useEffect(() => {
    getCoins()
  }, [])

  return (
    <div className="App container">
      <h1 className="mt-2">Coin market</h1>
      <Search onChange = { e => setSearch(e.target.value) } />
      <TableCoins coins = { coins } search = { search } />
    </div>
  );
}

export default App;
