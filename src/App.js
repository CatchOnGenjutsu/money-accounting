import logo from "./logo.svg";
import "./App.css";
import MainPage from "./components/mainPage";
import History from "./components/History";
import SpendingList from "./components/SpendingList";

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
        <Route path="/mainpage" element={<MainPage />} />
        <Route path="/history" element={<History />} />
        <Route path="/spending-list" element={<SpendingList />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
