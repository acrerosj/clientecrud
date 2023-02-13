import http from "../http-common";

class ClienteDataService {

  getAll() {
    return http.get('/clientes');
  }

  get(id) {
    return http.get(`/clientes/${id}`)
  }

  create(cliente) {
    return http.post('/clientes', cliente);
  }

  delete(id) {
    return http.delete(`/clientes/${id}`)
  }
}

export default new ClienteDataService;