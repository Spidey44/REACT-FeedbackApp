import { useState } from "react"

function FeedbackItem() {
    // default 7 on load. 10 on click
    const [rating, setRating] =useState(7)
    const [text, setText] =useState('This is an example of a feedback item 2')
  
    const handleClick = () => {
        setText('clicked')
        setRating((prev) => {
        console.log(prev)
        return prev + 1
        })
    }  
  
return (
    <div className="card">
     <div className="num-display">{rating}</div>
     <div className="text-display">{text}</div> 
    <button onClick={handleClick}>Click</button>

    </div>
  )
}

export default FeedbackItem

