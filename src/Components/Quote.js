import React from 'react'

export default function Quote(props) {
    const {author, text} = props;
    return (
        <div>
            <p><i>{author}</i> : {text}</p>
        </div>
    )
}
