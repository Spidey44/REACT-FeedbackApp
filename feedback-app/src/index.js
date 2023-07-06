// idex.js = entry point to react
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
//import App from './App'

// interact with ReactDom object model
// render takes 2. #1 main the app component to be inserted2. #2 the rood id
ReactDOM.render(
    <h1>
        <App />
    </h1>,
    document.getElementById('root')
)