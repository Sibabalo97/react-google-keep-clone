// Note.js
import React from 'react';
import { Pin, Edit2, Archive, Trash2 } from 'lucide-react';


// Note Component (Updated)
const Note = ({ note, handleEditNote, handlePinNote, handleDeleteNote }) => (
  <div className="bg-white border border-gray-200 rounded-lg p-4 mb-4 hover:shadow-md transition-shadow">
    <div className="flex justify-between items-start mb-2">
      <div className="flex-1 cursor-pointer" onClick={() => handleEditNote(note)}>
        {note.title && <h3 className="font-medium mb-1">{note.title}</h3>}
        <p className="text-gray-700">{note.content}</p>
      </div>
      <button onClick={() => handlePinNote(note.id)} className="p-2 hover:bg-gray-100 rounded-full">
        <Pin className={`w-4 h-4 ${note.pinned ? 'text-yellow-500' : 'text-gray-400'}`} />
      </button>
    </div>

    <div className="flex justify-end gap-1 mt-2">
      <button onClick={() => handleEditNote(note)} className="p-2 hover:bg-gray-100 rounded-full">
        <Edit2 className="w-4 h-4 text-gray-600" />
      </button>
      <button className="p-2 hover:bg-gray-100 rounded-full">
        <Archive className="w-4 h-4 text-gray-600" />
      </button>
      <button 
        onClick={() => handleDeleteNote(note.id)}
        className="p-2 hover:bg-gray-100 rounded-full"
      >
        <Trash2 className="w-4 h-4 text-gray-600" />
      </button>
    </div>
  </div>
);

export default Note;
