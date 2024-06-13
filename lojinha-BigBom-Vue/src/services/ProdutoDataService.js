import http from "../api";

class ProdutoDataService {
    getAll() {
        return http.get("/produtos");
    }

    get(id) {
        return http.get(`/produtos/${id}`);
    }

    create(data) {
        return http.post("/produtos", data)
    }
}

export default new ProdutoDataService();