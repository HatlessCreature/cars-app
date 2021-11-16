import React, { useEffect, useState } from 'react';
import SingleCar from '../components/SingleCar';
import CarService from '../services/CarService';

export default function AppCars() {

    const [cars, setCars] = useState([]);

    useEffect(() => {
        async function retrieveCars() {
            const data = await CarService.getAll();

            setCars(data);
        };
        retrieveCars();
    }, []);

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
                    />
                ))}
            </ul>
        </div>
    )
}