const notes = require('./src/notes');

const updateNote = (request, h) => {
  const noteId = request.params.id;
  const updateData = request.payload;

  const index = notes.findIndex(note => note.id === noteId);

  if (index !== -1) {
      notes[index] = {
          ...notes[index],
          ...updateData,
      };
      return h.response({
          status: 'success',
          message: 'Note updated',
      }).code(200);
  }

  return h.response({
      status: 'fail',
      message: 'Note not found',
  }).code(404);
};

const deleteNote = (request, h) => {
  const { id } = request.params;
  const index = notes.findIndex((note) => note.id === id);

  if (index !== -1) {
    notes.splice(index, 1);
    return {
      status: 'success',
      message: 'Catatan berhasil dihapus',
    };
  }

  return {
    status: 'fail',
    message: 'Catatan gagal dihapus. Id catatan tidak ditemukan',
  };
};

module.exports = {
  // ... previous handlers
  updateNote,
  deleteNote,
};