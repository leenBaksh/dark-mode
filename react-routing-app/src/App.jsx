import { useState } from 'react'
import MainPage from './mainpage';
function App() {

  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
    <button></button>
    <button onClick>Toggle Dark Mode</button>
    <h1 className={props.DarkMode ? 'dark' : 'light'}>HELLO WORLD</h1>
      
    </>
  );
}
export default App
