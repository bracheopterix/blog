import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'
import Sertar from './Blog/Sertar.tsx'
import { HashRouter } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
    {/* <App /> */}
    <Sertar />
    </HashRouter>
  </StrictMode>,
)
