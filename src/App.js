import DataFectchingTwo from "./Compnents/DataFectchingTwo";
import InfoPage from "./Compnents/InfoPage";
import "./styles.css";
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'

export default function App() {
  const NoMatchRoute = () => <div>404 Page</div>
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<DataFectchingTwo />} />
        <Route path="/details/:detailsid" exact element={<InfoPage />} />
         <Route element={NoMatchRoute} />
      </Routes>
    </Router>
  )
}
