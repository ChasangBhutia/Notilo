import { useEffect, useState } from 'react';
import './App.css';
import InputArea from './Components/InputArea/InputArea';
import ItemCard from './Components/ItemCard/ItemCard'
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';

const getLocalStorage = ()=>{
  const storedNotes = localStorage.getItem('notes');
  if(storedNotes) return JSON.parse(localStorage.getItem('notes'));
}

function App() {

  const [notes, setNotes] = useState(getLocalStorage)
  

  useEffect(()=>{
    localStorage.setItem('notes', JSON.stringify(notes))

  },[notes])
  
    
  
  
  
  function addItem(newNote) {
    setNotes(prevValue => {
      return [...prevValue, newNote]
    })
  }

  const onRemove = (itemIndex) => {

    setNotes(prevValue => {
      return [...prevValue.filter((item, index) => {
        return (index !== itemIndex);
      })]
    })
  }

  return (

    <div className="app">
      <Navbar />
      <InputArea onAdd={addItem} />
      <div className='itemContainer'>
        {notes.map((item, index) => {
          return (
            <ItemCard title={item.title} content={item.content} key={index} id={index} removeItem={onRemove} />
          )
        })}
      </div>
      <Footer />
    </div>
  );
}

export default App;
