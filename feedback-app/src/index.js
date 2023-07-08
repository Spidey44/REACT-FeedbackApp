// idex.js = entry point to react
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
//import App from './App'

// interact with ReactDom object model
// render takes 2. #1 main the app component to be inserted2. #2 the rood id
ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root'))