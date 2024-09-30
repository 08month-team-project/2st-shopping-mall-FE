import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import User from "./routes/User";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="user" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
