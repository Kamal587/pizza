import React, { useState } from 'react';
import Header from './components/Header';
import './scss/app.scss';
import Main from './Main';

function App() {
  const [searchValue, setSearchValue] = useState('');
  return (
    <div className="App">
      <div className="wrapper">
        <Header searchValue={searchValue} setSearchValue={setSearchValue} />

        <Main searchValue={searchValue} />
      </div>
    </div>
  );
}

export default App;
