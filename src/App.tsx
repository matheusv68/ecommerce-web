import { Link, Route, Routes } from 'react-router'
import Home from './pages/Home'
import Products from './pages/Products'
import './App.css'

function App() {

  return (
    <>
      <nav className="flex gap-4 p-4">
        <Link to="/">Início</Link>
        <Link to="/produtos">Produtos</Link>
      </nav>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produtos" element={<Products />} />
          <Route path="*" element={<h1>Página não encontrada</h1>} />
        </Routes>
      </main>
    </>
  )
}

export default App
