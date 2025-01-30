import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
/* import './index.css' */
import './Components/Qrcode.css'
import App from './App.jsx'
import { Qrcode } from './Components/Qrcode.jsx'
import { Qrcodenew } from './Components/Qrcodenew.jsx'

/* import { Usercard } from './Usercard.jsx'
import { Newuser } from './Newuser.jsx' */

createRoot(document.getElementById('root')).render(
  <StrictMode>
   {/*  <App /> */}
   {/* <Usercard/> */}
   {/* <Newuser/> */}
   {/* <Qrcode/> */}
   <Qrcodenew/>
  </StrictMode>,
)
