import axios from 'axios';

class CarService {
    constructor() {
        this.client = axios.create({
            baseURL: 'http://localhost:3000/api',
        });
    }

    async getAll() {
        try {
            const { data } = await this.client.get('cars');
            return data;

        } catch (error) {
            console.log(error);
        }
        return [];
    }
}

export default new CarService();