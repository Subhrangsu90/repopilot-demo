const SESSION_TTL_SECONDS = 60 * 60 * 8; // 8 hours
const sessions = new Map();

export function createSession(userId, now = Date.now()) {
  const id = crypto.randomUUID();
  sessions.set(id, { userId, expiresAt: now + SESSION_TTL_SECONDS });
  return id;
}

export function getSession(id, now = Date.now()) {
  const session = sessions.get(id);
  if (!session) return null;
  if (session.expiresAt <= now) {
    sessions.delete(id);
    return null;
  }
  return session;
}

export function destroySession(id) {
  sessions.delete(id);
}
