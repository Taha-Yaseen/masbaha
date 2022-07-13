import { Provider } from 'react-redux'
import { store } from './redux/store'
import MainRouter from './routes/main'






const App = () => {   
  return (
    <Provider store={store}>
        <MainRouter />
    </Provider>
  )
}

export default App
