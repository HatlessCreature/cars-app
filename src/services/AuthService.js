import HttpService from "./HttpService";

class AuthService extends HttpService {
    async login(credentials) {
        const { data } = await this.client.post("/auth/login", credentials);
        localStorage.setItem("token", data.token);
        return data;
    }

    async logout() {
        await this.client.post("/auth/logout");
        localStorage.removeItem("token");
    }

    async register(userData) {
        const { data } = await this.client.post("/auth/register", userData);
        localStorage.setItem("token", data.token);
        return data;
    }

    async getActiveUser() {
        const { data } = await this.client.get("/auth/me");
        return data;
    };


}

export default new AuthService();