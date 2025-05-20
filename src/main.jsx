import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import UserHeader from './components/UserHeader'
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './pages/Homepage';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserHeader />
    <Homepage />
  </StrictMode>,
)
