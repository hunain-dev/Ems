import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Authcontext from './Context/Authcontext.jsx'
import Taskcontext from './Context/Taskcontext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Authcontext>
      <Taskcontext>
      <App />

      </Taskcontext>

    </Authcontext>
    </BrowserRouter>
  </StrictMode>,
)
