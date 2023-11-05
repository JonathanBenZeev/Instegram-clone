import ReactDOM from 'react-dom/client'
import { RootCmp } from './RootCmp.tsx'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store/store.ts'
import './assets/styles/main.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Router>
    <Provider store={store}>
      <RootCmp />
    </Provider>
  </Router>
)
