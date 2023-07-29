import { useState, useContext, useEffect } from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackForm() {
  const [text, setText] = useState('type here')
  const [rating, setRating] = useState(10)
  const [btnDisabled, setBtnDisabled] = useState('true')
  const [message, setMessage] = useState('hello')
  
  const {addFeedback, feedbackEdit} = useContext(FeedbackContext)

  //Good for HTTP request
  // useEffect run on []change, not if empty = if ot emprty: 
useEffect(() => { 
  if (feedbackEdit.edit === true) {
  setBtnDisabled(false)
  setText(feedbackEdit.item.text)
  setRating(feedbackEdit.item.rating)
  }
}, [feedbackEdit])

  const handleTextChange = (e) => {
    console.log("typed",e.target.value)
    setText(e.target.value)
    if(text === '') {
      setBtnDisabled(true)
      setMessage(null)
    } else if (text !== '' && text.trim().length <=10){
    setMessage('text must be at least 10 characters')
    setBtnDisabled(true)
    } else {
    setMessage(null)
    setBtnDisabled(false)
    }
  }
 
const handleSubmit = (e) => {
e.preventDefault()
if(text.trim().length >10 ){
  const newFeedback = {
    text,
    rating,
  }
  console.log('handleSubmit',newFeedback)
  addFeedback(newFeedback)
  setText('')
}
}

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect select={(rating) => {
          console.log("rating passed to RatingSelect",rating)
          setRating(rating)
          }}/>
        <div className='input-group'>
          <input
        // text input and submit button
            onChange={handleTextChange}
            type='text'
            placeholder='Write a review'
            value={text}
          />
          <Button type='submit' isDisabled={btnDisabled} version="secondary">Send</Button>
        </div>
        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm