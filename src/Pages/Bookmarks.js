import { useState, useEffect } from 'react';
import JobCard from '../Components/JobCard';
import { getBookmarks, removeBookmark } from '../services/bookmarkService';

const Bookmarks = () => {
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    setBookmarks(getBookmarks());
  }, []);

  const handleUnbookmark = (jobId) => {
    removeBookmark(jobId);
    setBookmarks(getBookmarks());
  };

  return (
    <div className="container">
      {bookmarks.length === 0 && <p>No bookmarks available.</p>}
      {bookmarks.map((job, index) => (
        <JobCard
          key={job.id}
          job={job}
          index={index}
          onBookmark={() => handleUnbookmark(job.id)} 
        />
      ))}
    </div>
  );
};

export default Bookmarks;
