import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import SingleCar from '../components/SingleCar';
import CarService from '../services/CarService';

export default function AppCars() {

    const history = useHistory();
    const [cars, setCars] = useState([]);

    useEffect(() => {
        async function retrieveCars() {
            const data = await CarService.getAll();
            setCars(data);
        };
        retrieveCars();
    }, []);

    const handleEdit = (id) => {
        history.push(`edit/${id}`);
    };

    const handleDelete = async (delId) => {
        const response = prompt("Type 'delete' to confirm deletion.");

        if (response !== 'delete') {
            return;
        }
        const data = await CarService.delete(delId);

        if (data.count > 0) {
            setCars(cars.filter(({ id }) => id !== delId));
        }
    };

    return (
        <div>
            <h3>Cars</h3>
            <ul>
                {cars.map((car) => (
                    <SingleCar
                        key={car.id}
                        id={car.id}
                        brand={car.brand}
                        model={car.model}
                        year={car.year}
                        maxSpeed={car.maxSpeed}
                        isAutomatic={car.isAutomatic}
                        engine={car.engine}
                        numberOfDoors={car.numberOfDoors}
                        editFunction={handleEdit}
                        deleteFunction={handleDelete}
                    />
                ))}
            </ul>
        </div>
    )
}