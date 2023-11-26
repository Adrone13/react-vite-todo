import { useState } from 'react';

const themes = {
  light: 'light',
  dark: 'dark',
};

export function Header() {
  const [theme, setTheme] = useState(themes.light);

  const onThemeChange = () => {
    if (theme === themes.light) {
      setTheme(themes.dark);

      document.body.classList.add('dark-theme');
      
      return;
    }

    setTheme(themes.light);

    document.body.classList.remove('dark-theme');
  }

  return (
    <div className='header'>
      <button className='button header__theme-button' />
      <h1>TODO ✅</h1>
      <button className='button header__theme-button' onClick={onThemeChange}>
        {theme === themes.light ? '🌞' : '🌚'}
      </button>
    </div>
  );
}
