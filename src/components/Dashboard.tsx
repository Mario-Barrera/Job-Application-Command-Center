import './Dashboard.css'
import { applications } from '../data/applications'

function Dashboard() {
  const totalApplications = applications.length
  const interviews = applications.filter(function (application) {
    return application.status === 'Interview'
  }).length

  const offers = applications.filter(function (application) {
    return application.status === 'Offer'
  }).length

  const currentDate = new Date()
  const currentMonth = currentDate.getMonth() + 1
  const currentYear = currentDate.getFullYear()

  const applicationsThisMonth = applications.filter(function (application) {
    const [year, month] = application.dateApplied.split('-').map(Number)

    return year === currentYear && month === currentMonth
  }).length

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

        <article className="summary-card">
          <h3>Applications This Month</h3>
          <p className="summary-number">{applicationsThisMonth}</p>
        </article>
      </div>
    </section>
  )
}

export default Dashboard