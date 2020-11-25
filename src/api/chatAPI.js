import axios from 'axios'

const apiURL = 'http://localhost:8080/api/conversations'

export async function getChats() {
    const chatsResponse = await axios.get(apiURL);
    return chatsResponse.data;
}

export async function getSelectedChat(id) {
    const selectedChatResponse = await axios.get(`${apiURL}/${id}/messages`);
    return selectedChatResponse.data;
}

export async function postNewMessage(body) {
    const postChatResponse = await axios.post(`${apiURL}/${body.id}/messages`, body);
    return postChatResponse;
}