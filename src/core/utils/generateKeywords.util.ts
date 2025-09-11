export const generateKeywords = (keywords: string[] = []): string => {
  if (!keywords || keywords.length === 0) return "";
  let finalKeywords = "";
  const total = keywords.length;
  keywords.map((keyword, index) => {
    if (index + 1 !== total) {
      finalKeywords += `${keyword}, `;
    } else {
      finalKeywords += `${keyword}`;
    }
  });
  return finalKeywords;
};
