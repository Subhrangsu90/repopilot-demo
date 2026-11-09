# acme-notes

A tiny notes service used as the demo repository for RepoPilot.

## Features

- Email + password login with scrypt hashing
- In-memory sessions
- Notes with tags

## Development

```bash
npm test
```

## Project layout

| Path | What |
| --- | --- |
| `src/auth` | Login, password hashing, sessions |
| `src/notes` | Notes and search |
| `src/utils` | Small helpers |
