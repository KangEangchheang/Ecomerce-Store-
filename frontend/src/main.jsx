import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthProvider } from './Context/AuthContext.jsx';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { disableReactDevTools } from '@fvilers/disable-react-devtools';
//disable devTool extension since people see the data with this tool
// disableReactDevTools();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthProvider>
      <Routes>
        <Route path='/*' element={<App />} />
      </Routes>
    </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
)
