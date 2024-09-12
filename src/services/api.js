const API_URL = 'https://testapi.getlokalapp.com/common/jobs';

export const fetchJobs = async (page) => {
  const response = await fetch(`${API_URL}?page=${page}`);

  if (!response.ok) {
    throw new Error('Failed to fetch jobs');
  }
  const data = await response.json();
  return {
    jobs: data.results,
    totalPages: 3
  };
};
