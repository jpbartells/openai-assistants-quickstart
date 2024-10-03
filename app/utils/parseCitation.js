// Parse citation string to extract index and source text
export const parseCitation = (citationString) => {
    const regex = /【(\d+):(\d+)†([^\]]+)】/;
    const match = citationString.match(regex);
  
    if (match) {
      return {
        referenceIndex: match[1],
        subIndex: match[2],
        source: match[3],
      };
    }
  
    return null;
  };
  