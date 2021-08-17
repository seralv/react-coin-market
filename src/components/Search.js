import React from 'react'

const Search = ( { onChange } ) => {
    return (
        <input type="text" placeholder="Search a coin" className="form-control text-center" onChange = { onChange }/>
    )
}

export default Search
