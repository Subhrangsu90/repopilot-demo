let nextId = 1;
const notes = [];

export function createNote({ title, body = '', tags = [] }) {
  const note = { id: nextId++, title: title.trim(), body, tags, createdAt: new Date() };
  notes.push(note);
  return note;
}

export function listNotes() {
  return [...notes].sort((a, b) => a.title.localeCompare(b.title));
}

export function listNotesByTag(tag) {
  const wanted = tag.toLowerCase();
  return listNotes().filter((n) => n.tags.some((t) => t.toLowerCase() === wanted));
}
