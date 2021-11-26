import HttpService from "./HttpService";

class AuthService extends HttpService {
    async login(credentials) {
        const { data } = await this.client.post("/auth/login", credentials);
        localStorage.setItem("token", data.token);
        return data;
    }

    async logout() {

    }

    async register() {

    }


}

export default new AuthService();