// NoteInput.js
import React from 'react';
import { Pin, Check, Edit2, ImagePlus, X } from 'lucide-react';

// NoteInput Component (Updated)
const NoteInput = ({ 
  noteInput, 
  setNoteInput, 
  inputExpanded, 
  setInputExpanded, 
  editingNote, 
  setEditingNote, 
  setNotes 
}) => {
  const handleSaveNote = (e) => {
    e.preventDefault();

    if (noteInput.title.trim() || noteInput.content.trim()) {
      if (editingNote) {
        // Update existing note
        setNotes(prev => prev.map(note =>
          note.id === editingNote.id 
            ? { 
                ...note, 
                title: noteInput.title, 
                content: noteInput.content 
              } 
            : note
        ));
        setEditingNote(null);
      } else {
        // Create new note
        const newNote = {
          id: Date.now(),
          title: noteInput.title,
          content: noteInput.content,
          pinned: false,
          color: '#ffffff',
          createdAt: new Date().toISOString(),
        };
        setNotes(prev => [newNote, ...prev]);
      }

      // Reset input
      setNoteInput({ title: '', content: '' });
      setInputExpanded(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto mb-8">
      <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
        {inputExpanded ? (
          <form onSubmit={handleSaveNote} className="p-4">
            <input
              type="text"
              placeholder="Title"
              className="w-full outline-none font-medium mb-2"
              value={noteInput.title}
              onChange={(e) => setNoteInput(prev => ({ ...prev, title: e.target.value }))}
            />
            <textarea
              placeholder="Take a note..."
              className="w-full outline-none resize-none"
              rows="3"
              value={noteInput.content}
              onChange={(e) => setNoteInput(prev => ({ ...prev, content: e.target.value }))}
            />
            <div className="flex justify-between items-center mt-2">
              <button type="button" className="p-2 hover:bg-gray-100 rounded-full">
                <Pin className="w-4 h-4 text-gray-600" />
              </button>
              <div className="flex gap-2">
                <button 
                  type="button" 
                  onClick={() => setInputExpanded(false)} 
                  className="px-4 py-1 text-sm hover:bg-gray-100 rounded-md"
                >
                  <X className="w-4 h-4" />
                </button>
                <button 
                  type="submit" 
                  className="px-4 py-1 text-sm bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                  <Check className="w-4 h-4" />
                </button>
              </div>
            </div>
          </form>
        ) : (
          <div className="flex items-center px-4 py-2">
            <input
              type="text"
              placeholder="Take a note..."
              className="flex-1 outline-none py-2"
              onFocus={() => setInputExpanded(true)}
            />
            <div className="flex gap-2">
              <button className="p-2 hover:bg-gray-100 rounded-full"><Check className="w-5 h-5 text-gray-600" /></button>
              <button className="p-2 hover:bg-gray-100 rounded-full"><Edit2 className="w-5 h-5 text-gray-600" /></button>
              <button className="p-2 hover:bg-gray-100 rounded-full"><ImagePlus className="w-5 h-5 text-gray-600" /></button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NoteInput;
