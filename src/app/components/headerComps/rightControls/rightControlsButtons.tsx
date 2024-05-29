import HeaderMenu from "./rightControlsButtons/headerMenu";
import HeaderMessages from "./rightControlsButtons/headerMessages";
import HeaderNotifs from "./rightControlsButtons/headerNotifs";

export default function RightControlsButtons() {
    return (
        <div className="right-controls-buttons">
            <HeaderMenu />
            <HeaderMessages />
            <HeaderNotifs />
        </div>
    );
}