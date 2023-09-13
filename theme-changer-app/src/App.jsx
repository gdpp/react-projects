import { useState, useEffect } from "react"

function App() {
  const [theme, setTheme] = useState(() => { 
    if(window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }

    return 'light';

  });

  const handleChangeTheme = () => {
    setTheme(prevTheme => prevTheme == 'light' ? 'dark' : 'light' );
  };

  useEffect(() => {
    if(theme == 'dark'){
      document.querySelector('html').classList.add('dark');
    } else{
      document.querySelector('html').classList.remove('dark');
    }
  }, [theme]);

  return (
    <div className="h-screen flex justify-center items-center dark:bg-neutral-900">
      <button onClick={handleChangeTheme} className="bg-slate-200 px-4 py-2 rounded hover:bg-slate-300 dark:bg-slate-950 dark:text-white dark:hover:bg-slate-900">
        Change Theme
      </button>
    </div>
  )
}

export default App
