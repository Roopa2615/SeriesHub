import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import SignUpPage from "./Pages/SignUpPage";
import store from "./state/store";
import { Provider } from 'react-redux';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
    </Provider>
    </div>
  );
}

export default App;
