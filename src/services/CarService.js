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

    async add(newCar) {
        try {
            const { data } = await this.client.post('cars', newCar);
            return data;

        } catch (error) {
            console.log(error);
        }

        return null;
    }

    async get(id) {
        try {
            const { data } = await this.client.get(`cars/${id}`);
            return data;

        } catch (error) {
            console.log(error);
        }

        return {};
    }

    async edit(id, newCar) {
        try {
            const { data } = await this.client.put(`cars/${id}`, newCar);
            return data;

        } catch (error) {
            console.log(error);
        }

        return null;
    }

    async delete(id) {
        try {
            const { data } = await this.client.delete(`cars/${id}`);

            return data;
        } catch (error) {
            console.log(error);
        }

        return {};
    }
}

export default new CarService();