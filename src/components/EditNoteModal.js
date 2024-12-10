import React, { useState, useEffect } from 'react';
import { LucideIcon, X, Check } from 'lucide-react';

const EditNoteModal = ({ note, isOpen, onClose, onSave }) => {
  const [editedNote, setEditedNote] = useState({ title: '', content: '' });

  useEffect(() => {
    if (isOpen && note) {
      setEditedNote({ 
        title: note.title || '', 
        content: note.content || '' 
      });
    }
  }, [isOpen, note]);

  const handleSave = () => {
    onSave({
      ...note,
      title: editedNote.title,
      content: editedNote.content
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg w-full max-w-xl shadow-xl relative">
        <div className="p-4">
          <input 
            type="text" 
            placeholder="Title" 
            className="w-full text-xl font-medium mb-2 outline-none"
            value={editedNote.title}
            onChange={(e) => setEditedNote(prev => ({ ...prev, title: e.target.value }))}
          />
          <textarea 
            placeholder="Take a note..." 
            className="w-full min-h-[200px] outline-none resize-none"
            value={editedNote.content}
            onChange={(e) => setEditedNote(prev => ({ ...prev, content: e.target.value }))}
          />
        </div>

        <div className="flex justify-end items-center p-2 border-t gap-2">
          <button 
            onClick={onClose} 
            className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-md flex items-center"
          >
            <X className="w-4 h-4 mr-1" /> Cancel
          </button>
          <button 
            onClick={handleSave} 
            className="px-4 py-2 text-sm bg-blue-500 text-white rounded-md hover:bg-blue-600 flex items-center"
          >
            <Check className="w-4 h-4 mr-1" /> Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditNoteModal;