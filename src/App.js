import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Homepage from "../src/routes/web/home/homepage.jsx";
import Header from "./components/header/header.component.jsx";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Header />}>
        <Route index element={<Homepage />} />
      </Route>
    </Routes>
  );
}

export default App;
