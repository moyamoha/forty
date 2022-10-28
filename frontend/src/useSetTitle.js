import React, { useEffect } from 'react';

export default function useSetTitle(title) {
  useEffect(() => {
    document.title = 'Days - ' + title;
  }, []);
}
