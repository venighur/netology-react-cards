import React from 'react';
import './App.css';
import Card from './components/Card';

function App() {
  return (
    <div className="container">
      <Card
        title="Card title"
        text="Some quick example text to build on the card title and make up the bulk of the card's content.">
        <img src="..." className="card-img-custom" alt="Image cap" />
      </Card>
      <Card
        title="Special title treatment"
        text="With supporting text below as a natural lead-in to additional content."
      />
    </div>
  );
}

export default App;
