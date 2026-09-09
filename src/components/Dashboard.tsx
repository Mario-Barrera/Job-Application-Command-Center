import './Dashboard.css'

function Dashboard() {
  const totalApplications = 0
  const interviews = 0
  const offers = 0

  return (
    <section className="dashboard">
      <h2>Dashboard</h2>
      <p>Overview of your job application activity.</p>

      <div className="dashboard-summary">
        <article className="summary-card">
          <h3>Total Applications</h3>
          <p className="summary-number">{totalApplications}</p>
        </article>

        <article className="summary-card">
          <h3>Interviews</h3>
          <p className="summary-number">{interviews}</p>
        </article>

        <article className="summary-card">
          <h3>Offers</h3>
          <p className="summary-number">{offers}</p>
        </article>
      </div>
    </section>
  )
}

export default Dashboard