import { useState, useEffect } from 'react';

function useActiveLink(initialLink = '') {
  const [activeLink, setActiveLinkState] = useState(initialLink);

  useEffect(() => {
    // Get the active link from local storage if available
    const storedActiveLink = localStorage.getItem('activeLink');
    if (storedActiveLink) {
      setActiveLinkState(storedActiveLink);
    }
  }, []);

  const setActiveLink = (link) => {
    setActiveLinkState(link);
    // Save the active link to local storage
    localStorage.setItem('activeLink', link);
  };

  return {
    activeLink,
    setActiveLink,
  };
}

export default useActiveLink;
