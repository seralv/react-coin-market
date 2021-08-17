import React from 'react'
import CoinRow from './CoinRow'
import TableHeader from './TableHeader'

const TableCoins = ( { coins, search } ) => {

    const filteredCoins = coins.filter( (coin) => 
        coin.name.toLowerCase().includes(search.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(search.toLowerCase())
        )

    const titles = [
        '#',
        'Name',
        'Price',
        '24h variation',
        'Total volume'
    ]
    return (
        <table className = "table table-striped">
            <thead>
                <tr>
                    {
                        titles.map( ( t, index ) =>
                            <TableHeader title = { t } key = { index } />
                        )
                    }
                </tr>
            </thead>
            <tbody>
              {
                  filteredCoins.map( ( coin, index ) => 
                    <CoinRow key = { index } coin = { coin } index = { index } />
                  )
              }  
            </tbody>
        </table>
    )
}

export default TableCoins
