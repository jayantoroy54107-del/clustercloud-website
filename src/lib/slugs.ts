export const serviceNameToSlug = (name?: string): string => {
  if (!name) return '';
  const decoded = decodeURIComponent(name).toLowerCase().trim();
  if (decoded === 'seo & aeo' || decoded === 'seo and aeo' || decoded === 'seo-aeo') return 'seo-aeo';
  if (decoded === 'call & email handling' || decoded === 'call and email handling' || decoded === 'call-email-handling') return 'call-email-handling';
  return decoded.replace(/[\s_&]+/g, '-');
};
