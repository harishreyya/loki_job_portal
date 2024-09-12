const BOOKMARKS_KEY = 'bookmarkedJobs';

export const getBookmarks = () => {
  const bookmarks = localStorage.getItem(BOOKMARKS_KEY);
  return bookmarks ? JSON.parse(bookmarks) : [];
};

export const addBookmark = (job) => {
  const bookmarks = getBookmarks();
  if (!bookmarks.find(b => b.id === job.id)) {
    bookmarks.push(job);
    localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(bookmarks));
  }
};

export const removeBookmark = (jobId) => {
  let bookmarks = getBookmarks();
  bookmarks = bookmarks.filter(b => b.id !== jobId);
  localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(bookmarks));
};
