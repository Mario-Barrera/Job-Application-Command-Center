import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Dashboard from './components/Dashboard'
import type { Application } from './types/Application'
import ApplicationsList from './components/ApplicationsList'
import AddApplicationForm from './components/AddApplicationForm'
import { applications as initialApplications } from './data/applications'


function App() {
  const [applications, setApplications] = useState(initialApplications)

  function addApplication(newApplication: Omit<Application, 'id'>) {
    let highestId = 0

    for (const application of applications) {
      if (application.id > highestId) {
        highestId = application.id
      }
    }

    const applicationWithId = { 
      id: highestId + 1, ...newApplication,
    }

    setApplications([...applications, applicationWithId])
  }

  return (
    <>
      {/* Render the Header component here. */}
      <Header />

      <main>
        {/* Render the Dashboard component here. */}
        <Dashboard />

        {/* Render the Add Application form. */}
        <AddApplicationForm addApplication={addApplication} />

        {/* Render the Applications List component here. */}
        <ApplicationsList applications={applications} />
      </main>
    </>
  )
}

export default App