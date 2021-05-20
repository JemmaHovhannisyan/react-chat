import ModalImage from "react-modal-image";
import {useEffect, useState} from "react";

export const IncomeMessage = (props) => {
    const [message, setMessage] = useState({})
    useEffect(() => {
        setMessage({... props.incomeMess})
    }, [])

    return(<div>
        {
            (message.type === 'text') ?
                ( <div className="incoming_msg">
                    <div className="incoming_msg_img"><img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"/>
                    </div>
                    <div className="received_msg">
                        <div className="received_withd_msg">
                            <p>{message.text}</p>
                        </div>
                    </div>
                </div> )  : (message.type === 'image') ?
                (    <div className="incoming_msg">
                    <div className="incoming_msg_img"><img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"/>
                    </div>
                    <div className="received_msg">
                        <div>
                            {message?.attachment.map((e, i) => {
                                return(<div key={i} className="incoming_img">
                                    <ModalImage
                                        large= {e.payload.url}
                                        small={e.payload.url}
                                    />
                                </div>)
                            })}
                        </div>
                    </div>
                </div>) : ''
        }
    </div>)
}