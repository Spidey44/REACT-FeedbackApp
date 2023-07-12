//import { PropTypes } from 'react'
import FeedbackItem from './FeedbackItem'
import React from 'react'
type Feedback={  
  id:number,
  rating:number,
  text?:string
}
type Props = {
  feedback :Feedback[]
}

function FeedbackList({feedback, handleDelete}:Props) {
  console.log(feedback)
    if (!feedback || feedback.length === 0) {
        return <p>No Feedback Yet</p>
      }

  return (
    <div className='feedback-list'>
      {feedback.map((item) => (
        //<div>{item.rating}</div>
        < FeedbackItem key={item.id} item={item} 
        handleDelete={handleDelete}
             />
        ))}
    </div>

  )
}

export default FeedbackList
