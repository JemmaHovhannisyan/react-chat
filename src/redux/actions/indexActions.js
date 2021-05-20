export  const getDataSuccess = (data) => {
    return {
        type: 'chatData',
        payload: {data}
    }
}
