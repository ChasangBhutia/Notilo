import { useEffect, useState } from 'react';
import './App.css';
import InputArea from './Components/InputArea/InputArea';
import ItemCard from './Components/ItemCard/ItemCard';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';

const getLocalStorage = () => {
  try {
    const storedNotes = localStorage.getItem('notes');
    return storedNotes ? JSON.parse(storedNotes) : [];
  } catch (error) {
    console.error("Error reading from localStorage:", error);
    return [];
  }
};

function App() {
  const [notes, setNotes] = useState(getLocalStorage);

  useEffect(() => {
    if (notes.length > 0) {
      localStorage.setItem('notes', JSON.stringify(notes));
    }
  }, [notes]);

  function addItem(newNote) {
    setNotes(prevValue => [...prevValue, { ...newNote, id: Date.now() }]);
  }

  const onRemove = (itemId) => {
    setNotes(prevValue => prevValue.filter(item => item.id !== itemId));
  };

  return (
    <div className="app">
      <Navbar />
      <InputArea onAdd={addItem} />

      <div className="itemContainer">
        {notes.map((item) => (
          <ItemCard 
            title={item.title} 
            content={item.content} 
            key={item.id} 
            id={item.id} 
            removeItem={onRemove} 
          />
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default App;
