import './App.css'
import Header from './components/Header'
import Dashboard from './components/Dashboard'


function App() {
  return (
    <>
      {/* Render the Header component here. */}
      <Header />

      <main>
        {/* Render the Dashboard component here. */}
        <Dashboard />
      </main>
    </>
  )
}

export default App