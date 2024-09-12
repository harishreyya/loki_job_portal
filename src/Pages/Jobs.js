import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import JobCard from '../Components/JobCard';
import { fetchJobs } from '../services/api';
import { addBookmark } from '../services/bookmarkService';

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(1);

  const navigate = useNavigate();

  useEffect(() => {
    loadJobs(page);
  }, [page]);

  const loadJobs = async (page) => {
    setLoading(true);
    try {
      const response = await fetchJobs(page);
      setJobs(response.jobs);
      setTotalPages(response.totalPages);
    } catch (error) {
      setError('Error loading jobs.');
    } finally {
      setLoading(false);
    }
  };

  const handleNextPage = () => {
    if (page < totalPages) setPage(page + 1);
  };

  const handlePreviousPage = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleJobClick = (job) => {
    navigate('/job-details', { state: { job } });
  };

  const handleBookmark = (job) => {
    addBookmark(job);
  };

  if (error) return <p>{error}</p>;

  return (
    <div className="container">
        <h1>Jobs Portal</h1>
      {jobs.map((job, index) => (
        <JobCard key={job.id} job={job} onClick={() => handleJobClick(job)} onBookmark={handleBookmark} index={index} />
      ))}
      {loading && <p>Loading...</p>}
      
      <div className="pagination-controls">
        <button onClick={handlePreviousPage} disabled={page === 1}>
          Previous
        </button>
        <span>Page {page} of {totalPages}</span>
        <button onClick={handleNextPage} disabled={page === totalPages}>
          Next
        </button>
      </div>
      <br/>
    </div>
  );
};

export default Jobs;
