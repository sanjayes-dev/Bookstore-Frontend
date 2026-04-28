import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google';
import SearchContextShare from './Context/SearchContextShare.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <GoogleOAuthProvider clientId="947376061186-labvc7bmbhhog3tosldhhsg4lrr9drm1.apps.googleusercontent.com">
        <SearchContextShare>
          <App />
        </SearchContextShare>

      </GoogleOAuthProvider>
    </BrowserRouter>


  </StrictMode>,
)
