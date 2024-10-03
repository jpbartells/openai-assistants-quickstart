import { useEffect, useState } from 'react';
import { parseCitation } from '../utils/parseCitation';
import citations from '../data/citations.json';

const Citation = ({ citationString }) => {
  const [citationData, setCitationData] = useState(null);

  useEffect(() => {
    const parsedCitation = parseCitation(citationString);

    if (parsedCitation) {
      // Find the citation source from the data
      const citation = citations.find(
        (c) =>
          c.referenceIndex === parsedCitation.referenceIndex &&
          c.subIndex === parsedCitation.subIndex
      );
      setCitationData(citation);
    }
  }, [citationString]);

  if (!citationData) return null;

  return (
    <a href={citationData.source} target="_blank" rel="noopener noreferrer">
      Source
    </a>
  );
};

export default Citation;
