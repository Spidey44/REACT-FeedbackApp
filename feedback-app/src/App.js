import { v4 as uuidv4 } from 'uuid'
import { useState } from 'react'
import Header from "./Components/Header"
import FeedbackList from './Components/FeedbackList'
import FeedbackData from './data/FeedbackData'
import Card from './Components/shared/Card'
import FeedbackStats from './Components/FeedbackStats'
import FeedbackForm from './Components/FeedbackForm'

function App() {

    const [feedback, setFeedback] = useState(FeedbackData)

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        console.log("newFeedback", newFeedback)
        // copy All into array spread operator: new feedback + all current feedback
        //added in global state
        setFeedback([newFeedback, ...feedback])

    }

    const deleteFeedback = (id) => {
        if (window.confirm('Are yiu sure you want to delete?')) {
            setFeedback("text")
        }
    }
    return (
        <>
            <Header />
            <div ClassName='container'>
                <FeedbackForm handleAdd={addFeedback} />
                {/* Single source of truth
                feedback is out state. All auto update */}
                <FeedbackStats feedback={feedback} />
                <FeedbackList feedback={feedback}
                    handleDelete={deleteFeedback} />
                <Card>Hello World</Card>
            </div >
        </>
    )
}
export default App