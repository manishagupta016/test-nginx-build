import { Suspense } from 'react';import './App.css'
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import User from './pages/User';


function App() {

  return (
      <Router>
     <>
    <h1>App</h1>
    <nav>
      <ul>
        <li>
          <Link to="home">Home</Link>
        </li>
        <li>
          <Link to="users">Users</Link>
        </li>
      </ul>
    </nav>
    <Suspense fallback={null}>
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="users" element={<User />} />
      </Routes>
    </Suspense>
  </>
  </Router>

  )
}

export default App
