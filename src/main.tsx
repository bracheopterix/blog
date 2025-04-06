import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'
import Sertar from './Blog/Sertar.tsx'
import { HashRouter } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* I am your new Router insted of BrowserRouter */}
    {/* <HashRouter>  */}
    {/* <App /> */}
    <Sertar />
    {/* </HashRouter> */}
  </StrictMode>,
)
