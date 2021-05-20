import ModalImage from "react-modal-image";
import {useEffect, useState} from "react";

export const OutGoingMessage = (props) => {

    const [message, setMessage] = useState({})
    useEffect(() => {
        setMessage({... props.outGoingMess})
    }, [])

    return(<div>
        {
            (message.type === 'text') ?
                    <div className="outgoing_msg">
                        <div className="sent_msg">
                            <p>{message.text}</p>
                        </div>
                    </div> :
                (message.type === 'image') ?
                    <div className="outgoing_msg">
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
                </div> : ''
        }
    </div>)
}