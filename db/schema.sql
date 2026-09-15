-- Creates the applications table for storing job applications

CREATE TABLE IF NOT EXISTS applications (
  id SERIAL PRIMARY KEY,
  company VARCHAR(255) NOT NULL,
  position VARCHAR(255) NOT NULL,
  status VARCHAR(50) NOT NULL DEFAULT 'Applied',
  date_applied DATE NOT NULL
);