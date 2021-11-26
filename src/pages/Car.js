import { useEffect, useState } from "react";
import { useParams } from "react-router";
import CarService from "../services/CarService";

export default function Car() {
    const { id } = useParams();
    const [car, setCar] = useState([]);

    useEffect(() => {
        async function retrieveCar() {
            const data = await CarService.get(id);
            console.log();
            setCar(data);
        };
        retrieveCar();
    }, [id]);

    return (
        <div>
            <h1>Brand: {car.brand}</h1>
            <h2>Model: {car.model}</h2>
            <div style={{ display: "flex", justifyContent: "flex-start" }}>
                <div>
                    <p>Year: {car.year}</p>
                    <p>Max speed: {car.max_speed}</p>
                    <p>Is Automatic: {car.is_automatic ? 'Yes' : 'No'}</p>
                    <p>Engine: {car.engine}</p>
                    <p>Number of doors: {car.number_of_doors}</p>
                </div>
            </div>
        </div>
    );
}

