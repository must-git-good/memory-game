import React from 'react';
// import MemoryCard from './components/memoryCard';
import './App.css';
// import memoryCard from './memoryCard.json';
// import ScoreTally from './components/scoreTally';
import CardShuffler from './components/cardShuffler';


class App extends React.Component {

  render() {
    return (
      <div>
        {/* <ScoreTally /> */}
        <CardShuffler />
      </div>
    );
  }
}

export default App;
