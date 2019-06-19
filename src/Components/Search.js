import React from 'react'

export default function Search(props) {
    return (
        <div>
            <input type="text" onChange={(e) => props.setSearchString(e.target.value)}/>
        </div>
    )
}
