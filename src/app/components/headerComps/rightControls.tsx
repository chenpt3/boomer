import RightControlsButtons from "./rightControls/rightControlsButtons";
import RightControlsProfile from "./rightControls/rightControlsProfile";

export default function HeaderRightControls() {
    return (
        <div className="App-header-right-controls">
            <RightControlsButtons />
            <RightControlsProfile />
        </div>
    );
}