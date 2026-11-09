import assert from 'node:assert/strict';
import { test } from 'node:test';
import { createSession, getSession } from './session.js';

test('a new session is still valid one hour later', () => {
  const now = Date.now();
  const id = createSession('u1', now);
  assert.ok(getSession(id, now + 60 * 60 * 1000));
});

test('a session expires after eight hours', () => {
  const now = Date.now();
  const id = createSession('u1', now);
  assert.equal(getSession(id, now + 8 * 60 * 60 * 1000 + 1), null);
});
