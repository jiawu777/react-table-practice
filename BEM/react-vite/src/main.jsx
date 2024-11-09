import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
import './assets/styles/Base.scss';
import Sample from './pages/Sample.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Sample />
  </StrictMode>,
)
