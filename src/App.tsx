import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import './styles/global.scss';
import Header from './components/Header';

function App() {
  const [isShowen,setIsShowen] = useState(true);
  return (
    <main className="App">
      <Header setIsShowen={setIsShowen}/>
      <Sidebar isShowen={isShowen} setIsShowen={setIsShowen} />
      
    </main>
  );
}

export default App;
