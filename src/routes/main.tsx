
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import DetailsScreen from "../screens/Details"
import HomeScreen from "../screens/Home"



const MainRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/details" element={<DetailsScreen />} />
      </Routes>
    </Router >
  )
}

export default MainRouter
