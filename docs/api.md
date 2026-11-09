# API reference

## Auth

### `login(users, email, password)`

Returns `{ ok: true, sessionId }` or `{ ok: false, error }`. The error message is the
same for an unknown user and a wrong password.

### `createSession(userId)` / `getSession(id)` / `destroySession(id)`

Sessions live in memory and expire after eight hours.

## Notes

_TODO: createNote, listNotes, searchNotes._
