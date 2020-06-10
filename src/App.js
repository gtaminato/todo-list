import React, { useState } from 'react';
import SplashScreen from './components/splash-screen';

import './App.css';

const App = () => {

  const [showIntro, setShowIntro] = useState(true)

  return (
    <div className="App">
      {showIntro && <SplashScreen onStart={() => setShowIntro(false)} />}
    </div>
  );
}

export default App;
