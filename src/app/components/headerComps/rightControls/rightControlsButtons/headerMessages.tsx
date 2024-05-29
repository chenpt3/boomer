import message from '../../../../../assets/message-svgrepo-com-2.svg';
import messageNotif from '../../../../../assets/message-notif-svgrepo-com.svg';

export default function HeaderMessages() {
    return (
        <div className="header-messages">
            <img src={message} alt="Messages" />
            <img src={messageNotif} alt="Messages" />
        </div>
    );
}