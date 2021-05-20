import axios from "axios";

export default class GeneralApi {
    getChatData = async () => {
        return await axios.get('/chat').then(res => res)
    }
}