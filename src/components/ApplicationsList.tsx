import { useState } from 'react'
import { applications } from '../data/applications'
import './ApplicationsList.css'

function ApplicationsList() {
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('All')
  const [sortOption, setSortOption] = useState('newest')

  const filteredApplications = applications.filter(function (application) {
    const searchValue = searchTerm.toLowerCase()

    const matchesSearch =
      application.company.toLowerCase().includes(searchValue) ||
      application.position.toLowerCase().includes(searchValue) ||
      application.status.toLowerCase().includes(searchValue)

    const matchesStatus =
      statusFilter === 'All' || application.status === statusFilter

    // means both conditions must be true.
    return matchesSearch && matchesStatus
  })

  const sortedApplications = [...filteredApplications]

  sortedApplications.sort(function (a, b) {
    if (sortOption === 'oldest') {
      return (
        new Date(a.dateApplied).getTime() -
        new Date(b.dateApplied).getTime()
      )
    }

    if (sortOption === 'company') {
      return a.company.localeCompare(b.company)
    }

    return (
      new Date(b.dateApplied).getTime() -
      new Date(a.dateApplied).getTime()
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

      <select
        className="status-filter"
        value={statusFilter}
        onChange={function (event) {
          setStatusFilter(event.target.value)
        }}
      >
        <option value="All">All Statuses</option>
        <option value="Applied">Applied</option>
        <option value="Interview">Interview</option>
        <option value="Offer">Offer</option>
      </select>

      <select
        className="sort-filter"
        value={sortOption}
        onChange={function (event) {
          setSortOption(event.target.value)
        }}
      >
        <option value="newest">Newest First</option>
        <option value="oldest">Oldest First</option>
        <option value="company">Company A-Z</option>
      </select>

      <div className="applications-container">
        {sortedApplications.length === 0 ? (
          <p className="no-results">No applications found.</p>
        ) : (
          sortedApplications.map(function (application) {
            return (
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
          })
        )}
      </div>
    </section>
  )
}

export default ApplicationsList