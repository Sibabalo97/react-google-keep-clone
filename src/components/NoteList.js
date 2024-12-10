// NotesList.js
const NotesList = ({ notes, handleEditNote, handlePinNote, handleDeleteNote }) => (
    <div className="max-w-xl mx-auto">
      {notes.some(note => note.pinned) && (
        <NotesSection
          title="PINNED"
          notes={notes.filter(note => note.pinned)}
          handleEditNote={handleEditNote}
          handlePinNote={handlePinNote}
          handleDeleteNote={handleDeleteNote}
        />
      )}
  
      {notes.some(note => !note.pinned) && (
        <NotesSection
          title="OTHERS"
          notes={notes.filter(note => !note.pinned)}
          handleEditNote={handleEditNote}
          handlePinNote={handlePinNote}
          handleDeleteNote={handleDeleteNote}
        />
      )}
  
      {notes.length === 0 && (
        <div className="text-center text-gray-500 mt-8">
          <p>Notes you add appear here</p>
        </div>
      )}
    </div>
  );
  
  // NotesSection.js
  const NotesSection = ({ title, notes, handleEditNote, handlePinNote, handleDeleteNote }) => (
    <div className="mb-8">
      <h2 className="text-sm text-gray-500 mb-4">{title}</h2>
      {notes.map(note => (
        <Note 
          key={note.id} 
          note={note}
          handleEditNote={handleEditNote}
          handlePinNote={handlePinNote}
          handleDeleteNote={handleDeleteNote} // Pass delete handler
        />
      ))}
    </div>
  );
  