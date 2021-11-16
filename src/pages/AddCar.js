import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import CarService from '../services/CarService';

const rangeOfYears = Array(2018 - 1990 + 1)
    .fill(1990)
    .map((el, index) => el + index);

const engines = ['diesel', 'petrol', 'electric', 'hybrid'];

export default function AddCar() {
    const history = useHistory();

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
        await CarService.add(newCar);
        history.push('/cars');

    };

    return (
        <div>
            <h1>Create a new car</h1>
            <form
                onSubmit={handleSubmit}
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
                />
                <input
                    type='text'
                    value={newCar.model}
                    placeholder='Model'
                    onChange={({ target }) =>
                        setNewCar({ ...newCar, model: target.value })
                    }
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
                    value={newCar.maxSpeed}
                    placeholder='Max speed'
                    onChange={({ target }) =>
                        setNewCar({ ...newCar, maxSpeed: target.value })
                    }
                />
                <input
                    type='number'
                    value={newCar.numberOfDoors}
                    placeholder='Number of doors'
                    onChange={({ target }) =>
                        setNewCar({ ...newCar, numberOfDoors: target.value })
                    }
                />
                <span>
                    <label>Is it automatic?</label>
                    <input
                        type='checkbox'
                        checked={newCar.isAutomatic}
                        onChange={({ target }) => {
                            setNewCar({ ...newCar, isAutomatic: target.checked });
                        }}
                    />
                </span>


                <h4>Choose an engine type:</h4>
                {engines.map((engine, index) => (
                    <span key={index}>
                        <input
                            type='radio'
                            name='engine'
                            checked={engine === newCar.engine}
                            value={engine}
                            onChange={() => setNewCar({ ...newCar, engine })}
                        />
                        {engine}
                    </span>
                ))}

                <button>{'Create car'}</button>

            </form>
        </div>
    );
}