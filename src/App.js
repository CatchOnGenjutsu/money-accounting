import logo from "./logo.svg";
import "./App.css";
import MainPage from "./components/MainPage.js";
import Statistics from "./components/Statistics.js";
import SpendingList from "./components/SpendingList.js";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/main-page" element={<MainPage />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/spending-list" element={<SpendingList />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
