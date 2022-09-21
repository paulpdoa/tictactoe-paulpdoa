import Button from './components/Button';
import { useState } from 'react';

function App() {
  // check the current value of button

  const btns = [];
  for(let i = 0; i < 9; i++) {
    btns.push(Button);
  }

  return (
    <main>
      <h1 className="game-title"><span>Tic</span>-Tac-<span>Toe</span></h1>
      <div className="container">
        { btns.map((Button,idx) => (
          <Button key={idx} currentId={idx} />
        )) }
      </div>
    </main>
  )
}

export default App
