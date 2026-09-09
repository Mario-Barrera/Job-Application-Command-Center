import './App.css'
import Header from './components/Header'
import Dashboard from './components/Dashboard'
import ApplicationsList from './components/ApplicationsList'


function App() {
  return (
    <>
      {/* Render the Header component here. */}
      <Header />

      <main>
        {/* Render the Dashboard component here. */}
        <Dashboard />

        {/* Render the Applications List component here. */}
        <ApplicationsList />
      </main>
    </>
  )
}

export default App