export default function SingleCar({
    id,
    brand,
    model,
    year,
    maxSpeed,
    isAutomatic,
    engine,
    numberOfDoors,
    editFunction
}) {
    return (
        <li style={{
            display: 'flex',
            flexDirection: 'column',
            padding: 2,
            marginBottom: '20px',
        }}
        >
            <div>Brand: {brand}</div>
            <div>Model: {model}</div>
            <div>Year: {year}</div>
            <div>Max Speed: {maxSpeed}</div>
            <div>Automatic: {isAutomatic ? 'Yes' : 'No'}  </div>
            <div>Engine: {engine}</div>
            <div>Number of doors: {numberOfDoors}</div>
            <button onClick={() => editFunction(id)}>Edit</button>
        </li>
    );
}

