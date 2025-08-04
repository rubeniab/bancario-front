import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import ConsultaPredial from './ConsultaPredial'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ConsultaPredial />
  </StrictMode>,
)
