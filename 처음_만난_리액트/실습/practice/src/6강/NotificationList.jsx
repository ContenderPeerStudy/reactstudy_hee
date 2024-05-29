import React from "react";
import Notification from "./Notification"

const reservedNotifications = [
    {
        id :1,
        message : "안녕하세요, 오늘 일정을 알려드립니다.",  
    },
    {
        id :2,
        message : "안녕하세요, 오늘 점심을 알려드립니다.",
    },
    {
        id :3,
        message : "안녕하세요, 오늘 저녁을 알려드립니다.",
    },
];

var timer ;

class NotificationList extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            notifications : [{
                message : "안녕하세요 ."
            }] ,
        }

    }

    componentDidMount(){
        const { notifications } = this.state;
         timer = setInterval(() => {
            if(notifications.length < reservedNotifications.length){
                const index = notifications.length;
                notifications.push(reservedNotifications[index]);
                this.setState({
                    notifications: [],
                });
            }else{
                clearInterval(timer);
                return;
            }
        },  1000);

    }

    // https://www.inflearn.com/questions/619705/notificationlist-jsx-챕터-6장-실습-내용-질문-동시에-2개씩-나옴?commentId=205023#205023 Q&A 참고..
    componentWillUnmount() {

        if (timer) {
        
        clearInterval(timer);
        
        }
        
        }
        

    render() {
        return(
            <div>

                {  this.state.notifications.map((notification) => {
                    return <Notification 
                    key={notification.id}
                    id={notification.id}
                    message={notification.message} />
                })}

            </div>
        );
    }

}

export default NotificationList