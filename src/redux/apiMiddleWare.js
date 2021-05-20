import { getDataSuccess} from './actions/indexActions'
import GeneralApi from "../api";
const Api = new GeneralApi();

export const apiMiddleWare = store => next => action => {

    const {type, payload} = action;

    switch (type){
        case 'chatData':
            Api.getChatData()
                .then(res => {
                    next(getDataSuccess(res));
                });
            break;
        default:
            next(action);
            break;
    }

}