import React from 'react'

const Search = ({setSearchkeyword}) => {
    return (
        <div className="header-container">
            <ul>
                <input style={{width:"100%", height:"1.5rem"}} type="text" onChange={(e) => {
                    setSearchkeyword(e.target.value);
                }}  />
            </ul>
        </div>
    )
}

export default Search
