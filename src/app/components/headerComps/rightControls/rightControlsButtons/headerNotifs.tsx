import notifs from '../../../../../assets/notification-bell-svgrepo-com.svg';
import newNotifs from '../../../../../assets/notification-bell-new-svgrepo-com.svg';

export default function HeaderNotifs() {
    return (
        <div className="header-notifs">
            <img src={notifs} alt="Notifications" />
            <img src={newNotifs} alt="New Notifications" />
        </div>
    );
}