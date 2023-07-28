/* Single source of truth
                feedback is out state. All auto update */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from "./Components/Header"
import FeedbackList from './Components/FeedbackList'
//import Card from './Components/shared/Card'
import FeedbackStats from './Components/FeedbackStats'
import FeedbackForm from './Components/FeedbackForm'
import AboutIconLink from './Components/AboutIconLink'
import { FeedbackProvider } from './context/FeedbackContext'

import AboutPage from './pages/AboutPage'
//import { BrowserRouter as Router, Route } from 'react-router-dom'

function FeedbackPage({ feedback, addFeedback }) {
    return (
        <>
            <FeedbackStats />
            <FeedbackForm />
            <FeedbackList />
        </>
    )

}
function App() {

    return (
        <FeedbackProvider>
            <Router>
                <Header />
                <div ClassName='container'>
                    <Routes>
                        <Route path='/' element={<FeedbackPage />} />
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