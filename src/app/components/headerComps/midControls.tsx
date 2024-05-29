import HeaderHome from "./midControls/headerHome";
import HeaderVideos from "./midControls/headerVideos";
import HeaderGaming from "./midControls/headerGaming";
import HeaderMarketplace from "./midControls/headerMarketplace";

export default function HeaderMidControls() {
    return (
        <div className="App-header-mid-controls">
            <HeaderHome />
            <HeaderVideos />
            <HeaderGaming />
            <HeaderMarketplace />
        </div>
    );
}