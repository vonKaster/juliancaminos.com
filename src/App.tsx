import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    window.location.href = 'https://juliancaminos.com/cv.pdf';
  }, []);

  return null; // No renderizamos nada en la aplicación
}

export default App;
