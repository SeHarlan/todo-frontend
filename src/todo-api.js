import request from "superagent";

const URL = 'https://still-ocean-51194.herokuapp.com/api/todos';

export async function getList() {
    return await request.get(`${URL}`)
}

export async function insertTodo(object) {
    return await request.post(URL, object)
}