import { useState } from 'react'
import './AddApplicationForm.css'
import type { Application } from '../types/Application'

// Omit<Application, 'id'> uses the Application type, but does not require the id property.
type AddApplicationFormProps = {
  addApplication(newApplication: Omit<Application, 'id'>): void
}

function AddApplicationForm({ addApplication }: AddApplicationFormProps) {
  const [company, setCompany] = useState('')
  const [position, setPosition] = useState('')
  const [status, setStatus] = useState('Applied')
  const [dateApplied, setDateApplied] = useState('')

  // event: React.SubmitEvent<HTMLFormElement> is a TypeScript type annotation for a form submit event
  function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    const newApplication = {
      company,
      position,
      dateApplied,
      status,
    };

    console.log(newApplication)

    addApplication(newApplication)

    // Clear the form after adding the application
    setCompany('')
    setPosition('')
    setDateApplied('')
    setStatus('Applied')
  }
  
  return (
    <section className="add-application">
      <h2>Add Application</h2>

      <form
        className="application-form"
        onSubmit={handleSubmit}
      >
        <div className="form-group">
          <label htmlFor="company">Company</label>
          <input
            type="text"
            id="company"
            name="company"
            placeholder="Company name"
            value={company}
            onChange={function (event) {
              setCompany(event.target.value)
            }}
          />
        </div>

        <div className="form-group">
          <label htmlFor="position">Position</label>
          <input
            type="text"
            id="position"
            name="position"
            placeholder="Job title"
            value={position}
            onChange={function (event) {
              setPosition(event.target.value)
            }}
          />
        </div>

        <div className="form-group">
          <label htmlFor="status">Status</label>
          <select
            id="status"
            name="status"
            value={status}
            onChange={function (event) {
              setStatus(event.target.value)
            }}
          >
            <option value="Applied">Applied</option>
            <option value="Interview">Interview</option>
            <option value="Offer">Offer</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="dateApplied">Date Applied</label>
          <input
            type="date"
            id="dateApplied"
            name="dateApplied"
            value={dateApplied}
            onChange={function (event) {
              setDateApplied(event.target.value)
            }}
          />
        </div>

        <button type="submit">Add Application</button>
      </form>
    </section>
  )
}

export default AddApplicationForm