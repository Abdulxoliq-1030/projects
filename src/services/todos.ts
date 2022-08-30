import http from "./http";

const point = "/todos";

export function getTodos() {
  return http.get("/todos"); //
}

export function createTodos(body: {}) {
  return http.post(point, body);
}

export function getTodo(movieID: number) {
  return http.get(`${point}/${movieID}`);
}

export function deleteTodo(movieID: number) {
  return http.delete(`${point}/${movieID}`);
}

export function updateTodo(movieID: number, data: {}) {
  return http.put(`${point}/${movieID}`, data);
}
