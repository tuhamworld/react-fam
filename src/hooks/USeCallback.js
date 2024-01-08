import React, { useCallback } from 'react';

const handleSearchQuery = useCallback(() => {
    fetch(`https://api.blabla.com/${searchQuery}`);
  }, []);