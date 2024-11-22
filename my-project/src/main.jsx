import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './Header'
import Sobre from './Main/Sobre'
import Abc from './Main/Abc'
import FestaInfantil from './Main/FestaInfantil'
import QuinzeAnos from './Main/QuinzeAnos'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <Sobre/>
    <Abc/>
    <FestaInfantil/>
    <QuinzeAnos/>
  </StrictMode>,
)
