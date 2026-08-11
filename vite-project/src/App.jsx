import { Routes, Route } from "react-router-dom"
import './App.css'
import Home from "./pages/Home";
import Favorites from "./pages/Favorites"
import NavigationBar from "./components/NavigationBar";
function App() {

  return (
    <>
      <NavigationBar />
      <main className='main-content'>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/favorites" element={<Favorites />}></Route>
        </Routes>
      </main>
    </>

  )
}

export default App;