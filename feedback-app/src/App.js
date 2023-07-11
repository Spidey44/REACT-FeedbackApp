import { useState } from 'react'
import Header from "./Components/Header"
//import FeedbackList from "./Components/FeedbackList"
import FeedbackData from './data/FeedbackData'
import FeedbackItem from './Components/FeedbackItem'

function App() {

    const [feedback, setFeedback] = useState(FeedbackData)

    return (
        <>
            <Header />
            <div ClassName='container'>
                <FeedbackItem />
            </div >
        </>
    )
}
export default App