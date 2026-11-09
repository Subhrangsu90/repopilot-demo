import assert from 'node:assert/strict';
import { test } from 'node:test';
import { login } from './login.js';
import { hashPassword } from './password.js';

const users = new Map([['ada@example.com', { id: 'u1', passwordHash: hashPassword('correct horse') }]]);

test('logs in with the right password, any email case', () => {
  assert.equal(login(users, 'Ada@Example.com', 'correct horse').ok, true);
});

test('rejects a wrong password', () => {
  assert.deepEqual(login(users, 'ada@example.com', 'battery staple'), {
    ok: false,
    error: 'Invalid email or password',
  });
});

test('rejects an unknown user with the same message', () => {
  assert.equal(login(users, 'bob@example.com', 'x').error, 'Invalid email or password');
});
