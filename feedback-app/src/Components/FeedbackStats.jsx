import PropTypes from 'prop-types'

function FeedbackStats({ feedback }) {
  // Calculate ratings avg
  let average =
    feedback.reduce((acc, cur) => {
      return acc + cur.rating
    }, 0) / feedback.length

console.log(average)
//make is 2 digits # and remove the trailing 0
  average = average.toFixed(1).replace(/[.,]0$/, '')

  return (
    <div className='feedback-stats'>
      <h4>{feedback.length} Reviews</h4>
      {/* if average isNAN then make it 0 */}
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  )
}

FeedbackStats.propTypes = {
  feedback: PropTypes.array.isRequired,
}

export default FeedbackStats