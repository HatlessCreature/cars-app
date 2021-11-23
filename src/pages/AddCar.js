import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import CarService from '../services/CarService';

const rangeOfYears = Array(2018 - 1990 + 1)
    .fill(1990)
    .map((el, index) => el + index);

const engines = ['diesel', 'petrol', 'electric', 'hybrid'];

export default function AddCar() {
    const history = useHistory();
    const { id } = useParams();

    const [newCar, setNewCar] = useState({
        brand: '',
        model: '',
        year: rangeOfYears[0],
        maxSpeed: '',
        numberOfDoors: '',
        isAutomatic: false,
        engine: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (id) {
            await CarService.edit(id, newCar);
        } else {
            await CarService.add(newCar);
        }
        history.push('/cars');

    };

    const handleReset = () => {
        setNewCar({
            brand: '',
            model: '',
            year: rangeOfYears[0],
            max_speed: '',
            number_of_doors: '',
            is_automatic: false,
            engine: '',
        });
    };

    const handlePreview = () => {
        alert(`
        Brand: ${newCar.brand} \n
        Model: ${newCar.model} \n
        Year: ${newCar.year} \n
        Max speed: ${newCar.max_speed} \n
        Number of doors: ${newCar.number_of_doors} \n
        Automatic: ${newCar.is_automatic ? 'Yes' : 'No'} \n
        Engine: ${newCar.engine} \n
        `);
    };

    useEffect(() => {
        async function retrieveCar() {
            const retrievedCar = await CarService.get(id);
            setNewCar({ ...retrievedCar });
        };

        if (id) {
            retrieveCar();
        }

    }, [id]);

    return (
        <div>
            <h1>{id ? 'Edit a car' : 'Create a new car'}</h1>
            <form onSubmit={handleSubmit}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <input
                    type='text'
                    value={newCar.brand}
                    placeholder='Brand'
                    onChange={({ target }) =>
                        setNewCar({ ...newCar, brand: target.value })
                    }
                    required
                    minLength='2'
                />
                <input
                    type='text'
                    value={newCar.model}
                    placeholder='Model'
                    onChange={({ target }) =>
                        setNewCar({ ...newCar, model: target.value })
                    }
                    required
                    minLength='2'
                />
                <select
                    value={newCar.year}
                    onChange={({ target }) =>
                        setNewCar({ ...newCar, year: Number(target.value) })
                    }
                >
                    {rangeOfYears.map((year, index) => (
                        <option key={index} value={year}>
                            {year}
                        </option>
                    ))}
                </select>
                <input
                    type='number'
                    value={newCar.max_speed}
                    placeholder='Max speed'
                    onChange={({ target }) =>
                        setNewCar({ ...newCar, max_speed: target.value })
                    }
                />
                <input
                    type='number'
                    value={newCar.number_of_doors}
                    placeholder='Number of doors'
                    onChange={({ target }) =>
                        setNewCar({ ...newCar, number_of_doors: target.value })
                    }
                    required
                />
                <span>
                    <label>Is it automatic?</label>
                    <input
                        type='checkbox'
                        checked={newCar.is_automatic}
                        onChange={({ target }) => {
                            setNewCar({ ...newCar, is_automatic: target.checked });
                        }}
                    />
                </span>
                <h4>Choose an engine type:</h4>
                {engines.map((engine, index) => (
                    <span key={index}>
                        <input
                            type='radio'
                            name='engine'
                            value={engine}
                            onChange={() => setNewCar({ ...newCar, engine })}
                            checked={engine === newCar.engine}
                            required
                        />
                        {engine}
                    </span>
                ))}

                <button>{id ? 'Apply edit' : 'Create car'}</button>
                <button type='button' onClick={handleReset}>Reset</button>
                <button type='button' onClick={handlePreview}>Preview</button>
            </form>
        </div>
    );
}