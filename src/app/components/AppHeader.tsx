import HeaderLeftControls from "./headerComps/leftControls";
import HeaderMidControls from "./headerComps/midControls";
import HeaderRightControls from "./headerComps/rightControls";

export default function AppHeader() {
    return (
        <header className="App-header">
            <HeaderLeftControls />
            <HeaderMidControls />
            <HeaderRightControls />
        </header>
    );
}

