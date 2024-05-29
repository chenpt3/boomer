import { useEffect, useState } from 'react';
import israelFlag from '../../../../assets/flag-il-svgrepo-com.svg';
import americaFlag from '../../../../assets/flag-us-svgrepo-com.svg';

export default function HeaderLang() {
    const [language, setLanguage] = useState(document.body.classList.contains('hebrew'));

    const handleClick = () => {
        document.body.classList.toggle('hebrew');
        setLanguage(document.body.classList.contains('hebrew'));
    }

    useEffect(() => {
        setLanguage(document.body.classList.contains('hebrew'));
    }, []);

    return (
        <div className="App-header-language-toggle">
            <img src={language ? americaFlag : israelFlag} alt="Language" onClick={handleClick} />
        </div>
    );
}