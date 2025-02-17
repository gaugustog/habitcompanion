import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import { StrictMode } from 'react'
import { Amplify } from 'aws-amplify'
import awsExports from './aws-exports.js'
Amplify.configure(awsExports);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
