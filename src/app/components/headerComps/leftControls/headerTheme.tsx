import { useState, useEffect } from 'react';
import lightMode from '../../../../assets/toggle-on-svgrepo-com.svg';
import darkMode from '../../../../assets/toggle-off-svgrepo-com.svg';

export default function HeaderTheme() {
    const [theme, setTheme] = useState(document.body.classList.contains('dark') ? 'dark' : 'light');

    const handleClick = () => {
        document.body.classList.toggle('dark');
        setTheme(document.body.classList.contains('dark') ? 'dark' : 'light');
    }

    useEffect(() => {
        setTheme(document.body.classList.contains('dark') ? 'dark' : 'light');
    }, []);

    return (
        <div className="App-header-theme-toggle">
            <img src={theme === 'dark' ? darkMode : lightMode} alt="Theme" onClick={handleClick}/>
        </div>
    );
}