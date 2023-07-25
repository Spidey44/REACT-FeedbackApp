/* Single source of truth
                feedback is out state. All auto update */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import { useState } from 'react'
import Header from "./Components/Header"
import FeedbackList from './Components/FeedbackList'
import FeedbackData from './data/FeedbackData'
//import Card from './Components/shared/Card'
import FeedbackStats from './Components/FeedbackStats'
import FeedbackForm from './Components/FeedbackForm'
import AboutIconLink from './Components/AboutIconLink'
import { FeedbackProvider } from './context/FeedbackContext'

import AboutPage from './pages/AboutPage'
//import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {

    const [feedback, setFeedback] = useState(FeedbackData)

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        console.log("newFeedback", newFeedback)
        setFeedback([newFeedback, ...feedback])

    }

    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to delete?')) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }
    return (
        <FeedbackProvider>
            <Router>
                <Header />
                <div ClassName='container'>
                    <Routes>
                        <Route path='/' element={<FeedbackForm handleAdd={addFeedback} />} />
                        <Route path='/' element={<FeedbackStats feedback={feedback} />} />
                        <Route path='/test' element={<FeedbackList feedback={feedback} handleDelete={deleteFeedback} />} />
                        <Route path='/about' element={<AboutPage />} />
                    </Routes>
                    <AboutIconLink />
                </div >
            </Router>
        </FeedbackProvider>
    )
    // return (
    //     <FeedbackProvider>
    //         <Header />
    //         <div ClassName='container'>
    //             <FeedbackForm handleAdd={addFeedback} />
    //             <FeedbackStats feedback={feedback} />
    //             <FeedbackList feedback={feedback}
    //                 handleDelete={deleteFeedback} />

    //             <AboutIconLink />
    //         </div >
    //     </FeedbackProvider>
    // )
}
export default App