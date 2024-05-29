import { useRef, useState } from 'react';
import search from '../../../../assets/search-svgrepo-com-2.svg';
import returnI from '../../../../assets/return-back-button-svgrepo-com.svg';
import logo from '../../../../assets/logo-svgrepo-com.svg';

export default function HeaderSearch() {
    const [searchValue, setSearchValue] = useState('');
    const logoImgRef = useRef<HTMLImageElement>(null);
    const searchImgRef = useRef<HTMLImageElement>(null);
    const returnImgRef = useRef<HTMLImageElement>(null);
    const searchDropdownRef = useRef<HTMLDivElement>(null);
    const searchInputRef = useRef<HTMLInputElement>(null);

    const focusSearch = () => {
        searchImgRef.current?.classList.add('search-img-hidden');
        returnImgRef.current?.classList.remove('return-hidden');
        logoImgRef.current?.classList.add('logo-hidden');
        searchDropdownRef.current?.classList.remove('dropdown-hidden');
    }

    const handleReturn = () => {
        setSearchValue('');
        searchInputRef.current?.blur();
        searchImgRef.current?.classList.remove('search-img-hidden');
        returnImgRef.current?.classList.add('return-hidden');
        logoImgRef.current?.classList.remove('logo-hidden');
        searchDropdownRef.current?.classList.add('dropdown-hidden');
    }

    const handleLogoClick = () => {
        window.location.reload();
    }

    return (
        <div className="App-header-search-container">
            <div className="App-header-search-input">
                <img src={logo} alt="logo" className='w-12' onClick={handleLogoClick} />
                <img className="return-hidden" ref={returnImgRef} src={returnI} alt="Return" onClick={handleReturn} />
                <div className="search-container" style={{display: 'flex'}}>
                    <img ref={searchImgRef} src={search} alt="Search" />
                    <input 
                        ref={searchInputRef} 
                        name="search" 
                        className="search-input" 
                        placeholder='Search' 
                        onFocus={focusSearch} 
                        value={searchValue} 
                        onChange={e => setSearchValue(e.target.value)}
                    />
                </div>
            </div>
            <div ref={searchDropdownRef} className="search-dropdown dropdown-hidden"></div>
        </div>
    );
}
