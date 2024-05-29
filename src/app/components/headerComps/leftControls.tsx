import HeaderSearch from './leftControls/headerSearch';
import HeaderTheme from './leftControls/headerTheme';
import HeaderLang from './leftControls/headerLang';

export default function HeaderLeftControls() {
    return (
        <div className="App-header-left-controls">
            <HeaderSearch />
            <HeaderTheme />
            <HeaderLang />
        </div>
    );
}