// GoogleKeepClone.js
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Note from './components/Note';
import NoteInput from './components/NoteInput';
import { Lightbulb, Bell, Tag, Archive, Trash2 } from 'lucide-react'; // Add this line
import Header from './components/Header';
import EditNoteModal from './components/EditNoteModal'
import './index.css';

// Main GoogleKeepClone Component (Updated)
const GoogleKeepClone = () => {
  const [notes, setNotes] = useState([]);
  const [editingNote, setEditingNote] = useState(null);
  const [noteInput, setNoteInput] = useState({ title: '', content: '' });
  const [inputExpanded, setInputExpanded] = useState(false);
  const [menuExpanded, setMenuExpanded] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const menuItems = [
    { icon: <Lightbulb className="w-5 h-5" />, label: "Notes", active: true },
    { icon: <Bell className="w-5 h-5" />, label: "Reminders" },
    { icon: <Tag className="w-5 h-5" />, label: "Labels" },
    { icon: <Archive className="w-5 h-5" />, label: "Archive" },
    { icon: <Trash2 className="w-5 h-5" />, label: "Trash" },
  ];

  const toggleSidebar = () => setMenuExpanded(!menuExpanded);

  const handleEditNote = (note) => {
    setEditingNote(note);
    setNoteInput({ title: note.title, content: note.content });
    setIsModalOpen(true);
  };

  const handleUpdateNote = (updatedNote) => {
    setNotes(prev => prev.map(note => 
      note.id === updatedNote.id ? updatedNote : note
    ));
    setIsModalOpen(false);
    setEditingNote(null);
    setNoteInput({ title: '', content: '' });
  };

  const handlePinNote = (noteId) => {
    setNotes(prev => prev.map(note => 
      note.id === noteId ? { ...note, pinned: !note.pinned } : note
    ));
  };

  const handleDeleteNote = (noteId) => {
    setNotes(prev => prev.filter(note => note.id !== noteId));
  };

  return (
    <div className="h-screen flex flex-col">
      <Header toggleSidebar={toggleSidebar} />

      <div className="flex flex-1">
        <Sidebar menuExpanded={menuExpanded} menuItems={menuItems} />

        <main className="flex-1 p-4">
          <NoteInput
            noteInput={noteInput}
            setNoteInput={setNoteInput}
            inputExpanded={inputExpanded}
            setInputExpanded={setInputExpanded}
            editingNote={editingNote}
            setEditingNote={setEditingNote}
            setNotes={setNotes}
          />

          <div className="max-w-xl mx-auto">
            {notes.map(note => (
              <Note
                key={note.id}
                note={note}
                handleEditNote={handleEditNote}
                handlePinNote={handlePinNote}
                handleDeleteNote={handleDeleteNote}
              />
            ))}
          </div>
        </main>
      </div>

      <EditNoteModal
        note={editingNote}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setEditingNote(null);
          setNoteInput({ title: '', content: '' });
        }}
        onSave={handleUpdateNote}
      />
    </div>
  );
};

export default GoogleKeepClone;