/* Single source of truth
                feedback is out state. All auto update */

import { v4 as uuidv4 } from 'uuid'
import { useState } from 'react'
import Header from "./Components/Header"
import FeedbackList from './Components/FeedbackList'
import FeedbackData from './data/FeedbackData'
//import Card from './Components/shared/Card'
import FeedbackStats from './Components/FeedbackStats'
import FeedbackForm from './Components/FeedbackForm'
import AboutIconLink from './Components/AboutIconLink'
//import AboutPage from './pages/AboutPage'
//import { BrowserRouter as Router, Route } from 'react-router-dom'

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
    // return (
    //     <Router>
    //         <Header />
    //         <div ClassName='container'>
    //             <Route exact path='/'>
    //                 <FeedbackForm handleAdd={addFeedback} />
    //                 <FeedbackStats feedback={feedback} />
    //                 <FeedbackList feedback={feedback}
    //                     handleDelete={deleteFeedback} />
    //             </Route>

    //             <Route path='/about' Component={AboutPage} />
    //         </div >
    //     </Router>
    // )
    return (
        <>
            <Header />
            <div ClassName='container'>
                <FeedbackForm handleAdd={addFeedback} />
                <FeedbackStats feedback={feedback} />
                <FeedbackList feedback={feedback}
                    handleDelete={deleteFeedback} />

                <AboutIconLink />
            </div >
        </>
    )
}
export default App