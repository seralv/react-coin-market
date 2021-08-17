import React from 'react'

const CoinRow = ( { coin, index } ) => {
    return (
        <tr key = { coin.name }>
            <td className = "text-muted">
                { index + 1 }
            </td>
            <td>
                <img src = { coin.image } alt = { coin.name } style = {{ width: '2rem' }}/>
                <span className = "ms-3">
                    { coin.name }
                </span>
                <span className = "ms-2 text-muted">
                    { coin.symbol.toUpperCase() }
                </span>
            </td>
            <td>
                { coin.current_price.toLocaleString() }
            </td>
            <td className = { coin.market_cap_change_percentage_24h > 0 ? 'text-success' : 'text-danger'}>
                { coin.market_cap_change_percentage_24h.toLocaleString() }
            </td>
            <td>
                { coin.total_volume.toLocaleString() }
            </td>
        </tr>
    )
}

export default CoinRow