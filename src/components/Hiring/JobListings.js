import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import "./JobListings.css";

const JobListings = () => {
  const [jobs] = useState([
    {
      id: 1,
      title: "Software Developer",
      description:
        "We are seeking a highly skilled and motivated Software Developer to join our dynamic development team. As a Software Developer, you will be responsible for designing, coding, testing, and debugging software applications. You will collaborate with cross-functional teams to develop innovative software solutions that meet the needs of our clients or internal projects.",
      positionType: "Full-time, Flexible, Onsite",
      payRate: "$75,000 - $95,000",
      applicants: ["Applicant 1", "Applicant 2", "Applicant 3"],
    },
    {
      id: 2,
      title: "Quality Assurance (QA) Engineer",
      description:
        "QA Engineers are responsible for ensuring the quality and reliability of software products. They design and execute test plans, identify and report bugs, and work closely with the development team to resolve issues. QA Engineers also perform automated and manual testing to validate software functionality, performance, and security.",
      positionType: "Full-time, Flexible, Onsite",
      payRate: "$45,000 - $65,000",
      applicants: ["Applicant 1", "Applicant 2", "Applicant 3"],
    },
    {
      id: 3,
      title: "DevOps Engineer",
      description:
        "DevOps Engineers focus on the integration of development and operations processes. They are responsible for automating and streamlining software development, deployment, and infrastructure management. DevOps Engineers use tools and technologies to facilitate continuous integration, delivery, and deployment, ensuring scalability, stability, and reliability of software systems.",
      positionType: "Full-time, Flexible, Onsite",
      payRate: "$55,000 - $60,000",
      applicants: ["Applicant 1", "Applicant 2", "Applicant 3"],
    },
    {
      id: 4,
      title: "Data Scientist",
      description:
        "Data Scientists analyze and interpret complex data sets to extract valuable insights. They work on developing and implementing algorithms, models, and statistical methods to solve business problems. Data Scientists also collaborate with software engineers to integrate their models into software applications and ensure data-driven decision-making within the organization.",
      positionType: "Full-time, Flexible, Onsite",
      payRate: "$75,000 - $95,000",
      applicants: ["Applicant 1", "Applicant 2", "Applicant 3"],
    },
    // Add more job listings as needed
  ]);
  const [selectedJob, setSelectedJob] = useState(null);
  const handleJobClick = (job) => {
    setSelectedJob(job);
  };
  const handleBackClick = () => {
    setSelectedJob(null);
  };
  return (
    <div>
      {selectedJob ? (
        <div class="job-details">
          <h2 style={{ color: "rgb(25, 118, 210)" }}>Job Details</h2>
          <div className="job-details-container">
            <table className="job-details-table">
              <tbody>
                <tr>
                  <th>Title</th>
                  <td>{selectedJob.title}</td>
                </tr>
                <tr>
                  <th>Description</th>
                  <td>{selectedJob.description}</td>
                </tr>
                <tr>
                  <th>Position Type</th>
                  <td>{selectedJob.positionType}</td>
                </tr>
                <tr>
                  <th>Pay Rate</th>
                  <td>{selectedJob.payRate}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <button className="back-btn" onClick={handleBackClick}>
            Back
          </button>
        </div>
      ) : (
        <div class="job-listings">
          <Typography variant="h5" style={{ color: "grey" }}>
            List of Available Jobs
          </Typography>
          <p>
            Showing 1-{jobs.length} of {jobs.length}
          </p>
          {jobs.map((job) => (
            <div
              key={job.id}
              className="job-listing"
              onClick={() => handleJobClick(job)}
            >
              <Typography
                variant="subtitle1"
                style={{
                  color: "rgb(25, 118, 210)",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                {job.title}
              </Typography>
              <div className="description">{job.description}</div>
              <div>
                <span className="sub-heading"> Position Type:</span>{" "}
                {job.positionType}
              </div>
              <div>
                <span className="sub-heading"> Pay Rate:</span>
                {job.payRate}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default JobListings;
