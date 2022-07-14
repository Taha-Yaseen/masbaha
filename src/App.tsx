import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { persistor, store } from './redux/store'
import MainRouter from './routes/main'






const App = () => {   
  return(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MainRouter />
      </PersistGate>
    </Provider>
  )
}

export default App
