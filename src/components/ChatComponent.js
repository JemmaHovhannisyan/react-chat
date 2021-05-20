import '../index.scss';
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getDataSuccess} from '../redux/actions/indexActions'
import {IncomeMessage} from '../components/IncomeMessage'
import {OutGoingMessage} from '../components/OutGoingMessage'

function ChatComponent() {
    const chatData = useSelector(state => state?.chatData?.data);
    console.log(chatData)
    const dispatch = useDispatch();
    const [lastMessage, setLast] = useState({})

    useEffect(async () => {
        dispatch(getDataSuccess());
        let lastMess = await chatData?.messages.filter(mess => mess.from === 'jid_1109');
        let last =  (lastMess && lastMess.length !== 0) ? lastMess[lastMess.length - 1] : null;
        if(last?.text){
            last.text = last.text.slice(0, 100) + ' ...';
        }
        setLast({...last})
    }, [])

    return (<div className="container">
            <h3 className=" text-center">Messages</h3>
            <div className="messaging">
                <div className="inbox_msg">
                    <div className="inbox_people">
                        <div className="headind_srch">
                            <div className="recent_heading">
                                <h4>Recent</h4>
                            </div>
                            <div className="srch_bar">
                                <div className="stylish-input-group">
                                    <input type="text" className="search-bar" placeholder="Search" />
                                    <span className="input-group-addon">
                                    <button type="button"> <i className="fa fa-search" aria-hidden="true"></i> </button>
                                    </span></div>
                               </div>
                          </div>
                        <div className="inbox_chat">
                            <div className="chat_list active_chat">
                                <div className="chat_people">
                                    <div className="chat_img"><img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"/></div>
                                    <div className="chat_ib">
                                        <h5>{lastMessage.sender_name} <span className="chat_date">Dec 25</span></h5>
                                        <p>{lastMessage?.text ? lastMessage.text : 'Send photo'}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mesgs">
                        <div className="msg_history">
                            { chatData && chatData?.messages && chatData?.messages.length !== 0 && chatData.messages.map((el, i) => {
                                return (
                                    (el.from === 'jid_1109') ?
                                        <IncomeMessage incomeMess={el} /> :
                                        (el.from === 'jid_1111') ?
                                         <OutGoingMessage outGoingMess={el} /> : ''
                                     )
                                }) }
                        </div>
                        <div className="type_msg">
                            <div className="input_msg_write">
                                <input type="text" className="write_msg" placeholder="Type a message"/>
                                <button className="msg_send_btn" type="button">
                                    <i className="fa fa-paper-plane-o" aria-hidden="true"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ChatComponent;