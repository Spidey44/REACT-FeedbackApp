import { useState } from 'react'
import Header from "./Components/Header"
//import FeedbackList from "./Components/FeedbackList"
import FeedbackData from './data/FeedbackData'
import FeedbackItem from './Components/FeedbackItem'
import FeedbackList from './Components/FeedbackList'
import Card from './Components/shared/Card'

function App() {

    const [feedback, setFeedback] = useState(FeedbackData)

    return (
        <>
            <Header />
            <div ClassName='container'>
                <FeedbackList feedback={feedback} />
                <Card>Hello World</Card>
            </div >
        </>
    )
}
export default App