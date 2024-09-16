import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RecoilRoot } from 'recoil'


createRoot(document.getElementById('root')!).render(
  <RecoilRoot>

  <div className="flex justify-center p-4">
    <App />
  </div>
  </RecoilRoot>
)
