import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Header from './Components/Header'
import SobreMim from './Components/SobreMim'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <SobreMim/>
  </StrictMode>,
)
