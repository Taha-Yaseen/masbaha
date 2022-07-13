
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import HomeScreen from "../screens/Home"



const MainRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
      </Routes>
    </Router >
  )
}

export default MainRouter
