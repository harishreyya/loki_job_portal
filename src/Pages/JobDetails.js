import { useLocation } from 'react-router-dom';

const JobDetails = () => {
  const location = useLocation();
  const { job } = location.state || {};

  if (!job) {
    return <p>No job details available.</p>;
  }

  return (
    <div className="job-details">
      <h2>{job.title}</h2>
      <p>Location: {job.job_location_slug}</p>
      <p>Salary: {job.salary_max}</p>
      <p>Phone: {job.whatsapp_no}</p>
      <p>Description: {job.other_details }</p>
      <p>Company Name : {job.company_name}</p>
      <p>Job Category: {job.contentV3.V3[0].field_value }</p>
      <p>Gender: {job.contentV3.V3[1].field_value }</p>
      <p>Shift timing: {job.contentV3.V3[2].field_value }</p>
      <p>Other details: {job.contentV3.V3[3].field_value }</p>
    </div>
  );
};

export default JobDetails;
