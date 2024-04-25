const notes = require('./notes');
const { nanoid } = require('nanoid');

// const addNote = (request, h) => {
//   const { title, tags, body } = request.payload;

//   const id = nanoid(16);
//   const createdAt = new Date().toISOString();
//   const updatedAt = createdAt;

//   const newNote = {
//     title, tags, body, id, createdAt, updatedAt,
//   };

//   notes.push(newNote);

//   const isSuccess = notes.filter((note) => note.id === id).length > 0;

//   if (isSuccess) {
//     const response = h.response({
//       status: 'success',
//       message: 'Catatan berhasil ditambahkan',
//       data: {
//         noteId: id,
//       },
//     });
//     response.code(201);
//     return response;
//   }
// }

// const getAllNotes = () => ({
//   status: 'success',
//   data: {
//     notes,
//   },
// });

// const getNoteById = (request, h) => {
//   const { id } = request.params;

//   const note = notes.filter((n) => n.id === id)[0];

//   if (note) {
//     return {
//       status: 'success',
//       data: {
//         note,
//       },
//     };
//   }

//   const response = h.response({
//     status: 'fail',
//     message: 'Catatan tidak ditemukan',
//   });
//   response.code(404);
//   return response;
// };


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
  updateNote,
  deleteNote,
  // addNote,
  // getAllNotes,
  // getNoteById,
};