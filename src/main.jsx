import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Styles.css'
import ConsultaPredial from './ConsultaPredial'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ConsultaPredial />
  </StrictMode>,
)
