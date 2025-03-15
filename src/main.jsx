import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import Blog from './Blog.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App />
    <br></br> */}
    <Blog/>
  </StrictMode>,
)
