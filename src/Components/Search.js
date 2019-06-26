import React from 'react'

export default function Search(props) {
    const {searchString, setSearchString} = props;
    return (
        <div className="search-input">
            <input type="text" value={searchString} onChange={(e) => setSearchString(e.target.value)}/>
        </div>
    )
}
