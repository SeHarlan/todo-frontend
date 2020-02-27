import request from "superagent";

const URL = 'https://still-ocean-51194.herokuapp.com/api/todos';
const authURL = 'https://still-ocean-51194.herokuapp.com/api/auth'

export async function getList(user) {
    return await request.get(`${URL}`).set('Authorization', user.token);
}

export async function insertTodo(object, user) {
    return await request.post(URL, object).set('Authorization', user.token);
}

export async function toggleDBItem(object, user) {
    await request.put(`${URL}/${object.id}`, object).set('Authorization', user.token);
}

export async function signUp(deets) {
    return await request.post(`${authURL}/signup`, deets)
}
export async function login(deets) {
    return await request.post(`${authURL}/signin`, deets)
}