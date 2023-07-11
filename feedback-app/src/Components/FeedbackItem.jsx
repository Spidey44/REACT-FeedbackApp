function FeedbackItem({item}) {
return (
    <card className='card'>
        <div className="num-display">{item.rating}</div>
        <div className="text-display">{item.text}</div> 
    </card>
  )
}

export default FeedbackItem

