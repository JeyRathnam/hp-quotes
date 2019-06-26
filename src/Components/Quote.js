import React from 'react'

const length = (x) => x.length
    const sum = (a, b) => a+b

    const indexesOf = (substr) => ({
        in: (str) => (
          str
          .split(substr)
          .slice(0, -1)
          .map(length)
          .map((_, i, lengths) => (
            lengths
            .slice(0, i+1)
            .reduce(sum, i*substr.length)
          ))
        )  
      });

export default function Quote(props) {
    const {author, text, searchString} = props;

    const highlightText = () => {
        const output = []
        var position = 0
        const searchPositions = indexesOf(searchString.toLowerCase()).in(text.toLowerCase())
        var i = 0
        searchPositions.forEach(searchPosition => {
            const normalText = text.substr(position, searchPosition)
            output.push(normalText)
            output.push(<mark key={i}>{text.substr(searchPosition, searchString.length)}</mark>)
            i++;
            position = searchPosition + searchString.length
        });

        if(position < text.length){
            const remainingText = text.substr(position, text.length)
            output.push(remainingText)
        }
        
        return output

    };

    return (
        <div>
            <div className="quote">
            {highlightText()}
            </div>
            <span> - </span>
            <div className="author">
            {author}
            </div>
        </div>
    )
}
