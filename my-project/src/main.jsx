import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './Header'
import Sobre from './Main/Sobre'
import Abc from './Main/Abc'
import FestaInfantil from './Main/FestaInfantil'
import QuinzeAnos from './Main/QuinzeAnos'
import Sociais from './Main/Sociais'
import Gestantes from './Main/Gestantes'
import Empresariais from './Main/Empresariais'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
      <Sobre/>
      <Abc/>
      <FestaInfantil/>
      <QuinzeAnos/>
      <Gestantes/>
      <Sociais/>
      <Empresariais/>
  </StrictMode>,
)
