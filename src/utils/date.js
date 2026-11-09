const DAY = 24 * 60 * 60 * 1000;

/** "today", "1 day ago", "3 days ago" */
export function formatRelative(date, now = new Date()) {
  const days = Math.round((now.getTime() - date.getTime()) / DAY);
  if (days === 0) return 'today';
  return days === 1 ? '1 day ago' : `${days} days ago`;
}
