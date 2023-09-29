import './App.css';
import React from 'react';
import Button from './components/Button'; // Import the Button component


function App() {
  return (
    <div className="App">
        <p>What's duckin'?</p>
        <Button /> {/* Use the imported Button component */}
    </div>
  );
}

export default App;
