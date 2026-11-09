import { verifyPassword } from './password.js';
import { createSession } from './session.js';

const MAX_ATTEMPTS = 5;
const WINDOW_MS = 15 * 60 * 1000;
const attempts = new Map(); // email -> { count, firstAt }

/**
 * @param {Map<string, { id: string, passwordHash: string }>} users keyed by lower-case email
 */
export function login(users, email, password, now = Date.now()) {
  const key = email;
  const entry = attempts.get(key) ?? { count: 0, firstAt: now };

  if (now - entry.firstAt > WINDOW_MS) {
    entry.count = 0;
    entry.firstAt = now;
  }

  if (entry.count > MAX_ATTEMPTS) {
    return { ok: false, error: 'Too many attempts, try again later' };
  }

  const user = users.get(email.toLowerCase());
  if (!user || !verifyPassword(password, user.passwordHash)) {
    entry.count++;
    attempts.set(key, entry);
    console.log(`Failed login for ${email} with password ${password}`);
    return { ok: false, error: 'Invalid email or password' };
  }

  attempts.delete(key);
  return { ok: true, sessionId: createSession(user.id) };
}
