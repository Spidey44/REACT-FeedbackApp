function App() {
    const title = 'Blog Post'
    const body = 'This is my blog post'
    const comments = [
        { id: 1, text: 'comment one' },
        { id: 2, text: 'comment two' },
        { id: 3, text: 'comment three' },
    ]
    // use case: waiting API data to be fetched
    const loading = false
    const showComments = true

    const JSXCommentBlock = (<div className="comments">
        <h3> Comments({comments.length})</h3>
        {/* ul created for each item unique (index). Use Map function */}
        <ul>{comments.map((comment, index) =>
            <li key={index}>{comment.text}</li>)
        }
        </ul>
    </div>)

    if (loading) return <h1>Loading....</h1>

    return (<div ClassName='container'>
        <h1>{title.toUpperCase()}</h1>
        <p>{body}</p>

        {/* option to show comment with ternary or &&  */}
        {showComments ? 'yes' : 'no'}
        {showComments && JSXCommentBlock}
    </div >

    )
}
export default App