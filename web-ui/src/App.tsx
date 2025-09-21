import './css/App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Stats from "./containers/Stats";
import NoPage from "./components/NoPage";
import Assess from './containers/Assessment';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Assess readOnly={false} />} />
          <Route path="stats" element={<Stats/>} />
          <Route path="view-assessment" element={<Assess readOnly={true}/>} />
          <Route path="*" element={<NoPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
