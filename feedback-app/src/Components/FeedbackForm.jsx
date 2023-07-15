import { useState } from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'

function FeedbackForm() {
  const [text, setText] = useState('type here')
  const [rating, setRating] = useState(10)
  const [btnDisabled, setBtnDisabled] = useState('true')
  const [message, setMessage] = useState('hello')

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
 
  return (
    <Card>
      <form>
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