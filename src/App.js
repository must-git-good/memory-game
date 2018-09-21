import React from 'react';
import MemoryCard from './components/memoryCard';
import './App.css';
import memoryCard from './memoryCard.json';

class App extends React.Component {
  render() {
    return (
      <div>
        <MemoryCard
        id={memoryCard[0].id}
        image={memoryCard[0].image}
         />
         <MemoryCard
        id={memoryCard[1].id}
        image={memoryCard[1].image}
         />
         <MemoryCard
        id={memoryCard[2].id}
        image={memoryCard[2].image}
         />
      </div>
    );
  }
}

export default App;
