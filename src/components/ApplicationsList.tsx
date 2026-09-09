import { useState } from 'react'
import { applications } from '../data/applications'
import './ApplicationsList.css'

function ApplicationsList() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredApplications = applications.filter(function (application) {
    const searchValue = searchTerm.toLowerCase()

    return (
      application.company.toLowerCase().includes(searchValue) ||
      application.position.toLowerCase().includes(searchValue) ||
      application.status.toLowerCase().includes(searchValue)
    )
  })

  return (
    <section className="applications-list">
      <h2>Applications</h2>

      <input
        type="search"
        placeholder="Search applications..."
        value={searchTerm}
        onChange={function (event) {
          setSearchTerm(event.target.value)
        }}
      />

      <div className="applications-container">
        {filteredApplications.map(function (application) {
          return (
            // React needs a unique key when rendering a list.
            <article className="application-card" key={application.id}>
              <h3>{application.company}</h3>

              <p>
                <strong>Position:</strong> {application.position}
              </p>

              <p>
                <strong>Status:</strong> {application.status}
              </p>

              <p>
                <strong>Date Applied:</strong> {application.dateApplied}
              </p>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default ApplicationsList