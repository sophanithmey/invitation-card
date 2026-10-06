export function getGuestSalutation(
  lang: string,
  fallback: string,
  prefix?: string | null,
): string {
  if (!prefix) return fallback;
  const p = prefix.trim().toLowerCase();
  if (p === 'mr' || p === 'mr.' || p === 'លោក') {
    return lang === 'kh' ? 'លោក' : 'Mr.';
  }
  if (
    ['ms', 'ms.', 'mrs', 'mrs.', 'miss', 'លោកស្រី', 'អ្នកនាង', 'កញ្ញា'].includes(p)
  ) {
    return lang === 'kh'
      ? 'លោកស្រី / អ្នកនាង'
      : 'Ms.';
  }
  if (['brother', 'bro', 'បងប្រុស', 'បង'].includes(p)) {
    return lang === 'kh'
      ? 'បងប្រុស'
      : 'Brother';
  }
  if (['sister', 'sis', 'បងស្រី'].includes(p)) {
    return lang === 'kh'
      ? 'បងស្រី'
      : 'Sister';
  }
  return lang === 'kh' ? `${prefix}` : `${prefix}`;
}
