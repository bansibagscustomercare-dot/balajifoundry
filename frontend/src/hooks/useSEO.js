import { useEffect } from 'react';

const useSEO = ({ title, description, keywords }) => {
  useEffect(() => {
    // Set title
    document.title = title;

    // Set meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', description);

    // Set meta keywords
    if (keywords) {
      let metaKeys = document.querySelector('meta[name="keywords"]');
      if (metaKeys) metaKeys.setAttribute('content', keywords);
    }

    // Set OG title
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);

    // Set OG description
    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', description);

    // Set twitter title
    let twTitle = document.querySelector('meta[name="twitter:title"]');
    if (twTitle) twTitle.setAttribute('content', title);

    // Set twitter description
    let twDesc = document.querySelector('meta[name="twitter:description"]');
    if (twDesc) twDesc.setAttribute('content', description);
  }, [title, description, keywords]);
};

export default useSEO;
