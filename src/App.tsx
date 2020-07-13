import React from 'react';

import RobotPage from './components/RobotPage';
import './App.scss';

function App() {
  return (
    <div className="App__root">
      <header className="App__header">
        Mr Yum Robot Task - Alex Tkachuk
      </header>
      <main className="App__body">
        <RobotPage />
      </main>
    </div>
  );
}

export default App;
