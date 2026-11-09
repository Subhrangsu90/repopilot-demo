import { verifyPassword } from './password.js';
import { createSession } from './session.js';

/**
 * @param {Map<string, { id: string, passwordHash: string }>} users keyed by lower-case email
 */
export function login(users, email, password) {
  const user = users.get(email.toLowerCase());
  if (!user || !verifyPassword(password, user.passwordHash)) {
    return { ok: false, error: 'Invalid email or password' };
  }
  return { ok: true, sessionId: createSession(user.id) };
}
