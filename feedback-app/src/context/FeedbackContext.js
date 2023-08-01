import { createContext, useState, useEffect } from "react";


const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true)
    const [feedback, setFeedback] = useState([])
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    useEffect(() => { fetchFeedback() }, [])


    // Fetch feedback
    const fetchFeedback = async () => {
        const response = await fetch(`/feedback?_sort=id&_order=desc`)
        const data = await response.json()

        setFeedback(data)
        setIsLoading(false)
    }

    //add feedback
    const addFeedback = async (newFeedback) => {
        const response = await fetch('/feedback', {
            method: 'POST',
            headers: {
                'Content-Type': 'application.json'
            },
            body: JSON.stringify(newFeedback),

        })

        const data = await response.json()


        setFeedback([data, ...feedback])

    }

    // Update feedback item
    const updateFeedback = (id, updItem) => {
        console.log('id, updItem', id, updItem)
        setFeedback(
            feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item))
        )
    }


    //set item to be updated
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }

    //delete feedback
    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to delete?')) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    return (
        <FeedbackContext.Provider
            value={{
                // object + state holding the item and boolean
                feedback,
                feedbackEdit,
                isLoading,
                // functions
                deleteFeedback,
                addFeedback,
                editFeedback,
                updateFeedback,
            }}
        >
            {children}
        </FeedbackContext.Provider>
    )
}
export default FeedbackContext